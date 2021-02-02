import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { postRecipe } from "../../store/actions/recipes";
import picker from "../../functions/picker";

import GoBackButton from "../../commons/GoBackButton";

import Data from "./partials/Data";
import Ingredients from "./partials/Ingredients";
import Instructions from "./partials/Instructions";
import Preview from "./partials/Preview";

import styles from "./styles";

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user } = useSelector((state) => state.usersReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const categoriesDropdown = categories.map((c) => ({ value: c.name }));

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [categoryName, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const [page, setPage] = useState(0);

  const handleSubmit = () => {
    const [category] = categories.filter((c) => c.name == categoryName);
    const date = new Date();
    const recipe = {
      title,
      image,
      ingredients,
      instructions,
      category,
      owner: user._id,
      date,
    };
    dispatch(postRecipe(recipe)).then(() => {
      navigation.navigate("Feed");
      setPage(0);
      setTitle("");
      setCategory("");
      setImage("");
      setIngredients([]);
      setInstructions([]);
    });
  };

  const handlePage = (page) => {
    switch (page) {
      case 0:
        return (
          <Data
            handleInput={setTitle}
            title={title}
            openImage={() => picker(setImage)}
            image={image}
            handleCategorie={setCategory}
            categories={categoriesDropdown}
          />
        );
      case 1:
        return (
          <Ingredients
            setIngredients={setIngredients}
            ingredients={ingredients}
          />
        );
      case 2:
        return (
          <Instructions
            setInstructions={setInstructions}
            instructions={instructions}
          />
        );

      case 3:
        return (
          <Preview
            title={title}
            image={image}
            category={categoryName}
            ingredients={ingredients}
            instructions={instructions}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {page ? (
          <View style={styles.goBackButton}>
            <GoBackButton onPress={() => setPage(page - 1)} />
          </View>
        ) : null}
        <Text style={styles.title}>Crea tu propia receta</Text>
      </View>

      <View style={styles.contentContainer}>{handlePage(page)}</View>

      <View style={styles.buttonContainer}>
        {page < 3 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPage(page + 1)}
          >
            <Text style={styles.textBtn}>Siguiente</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.textBtn}>Confirmar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
