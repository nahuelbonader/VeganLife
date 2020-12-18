import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import FirstStep from "../components/FirstStepRecipe";
import Ingredients from "../components/IngredientsRecipe";
import Steps from "../components/StepsRecipe";
import GoBackButton from "../components/GoBackButton";

import PreviewRecipe from "../components/PreviewRecipe";

import { postRecipe } from "../store/actions/recipes";
import { handleOpenImage } from "../customFunctions/picker";

import colors from "../styles/colors";
import normalize from "react-native-normalize";

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
          <FirstStep
            handleInput={setTitle}
            title={title}
            openImage={() => handleOpenImage(setImage)}
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
          <Steps
            setInstructions={setInstructions}
            instructions={instructions}
          />
        );

      case 3:
        return (
          <PreviewRecipe
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

const styles = StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 8,
    width: "100%",
  },
  buttonContainer: {
    flex: 1.3,
    width: "100%",
    justifyContent: "center",
  },

  // TEXTS
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textBtn: {
    color: colors.background,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // BUTTONS
  goBackButton: {
    position: "absolute",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  button: {
    height: "60%",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dartmouthGreen,
    borderRadius: normalize(30),
  },
});
