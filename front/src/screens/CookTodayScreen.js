import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TouchableOpacityComponent,
} from "react-native";
import styles from "../styles/cookToday";
import useInputs from "../hooks/useInputs";
import CardRecipe from "../components/CardRecipe";
import Icon from "react-native-vector-icons/Ionicons";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialChip from "react-native-material-chip";
import colors from "../styles/colors";

const CookToday = () => {
  const [ingredients, setIngredients] = useState([]);
  const [alert, setAlert] = useState(false);

  const [{ search }, handleChange] = useInputs();
  const handleSearch = handleChange("search");
  const recipes = useSelector((state) => state.recipesReducer.recipes);

  const setIngredient = () => {
    if (ingredients.includes(search)) setAlert(true);
    else {
      setIngredients([search, ...ingredients]);
      handleSearch("");
    }
  };

  const deleteIngredient = (ingredient) => {
    setIngredients(ingredients.filter((e) => e !== ingredient));
  };

  const filterRecipes = (ingredients, recipes) => {
    let newRecipes = recipes;
    for (let i = 0; i < ingredients.length; i++) {
      const ingredientSearch = ingredients[i].toLowerCase();
      newRecipes = newRecipes.filter((recipe) => {
        let exist = false;
        recipe.ingredients.forEach((e) => {
          const ingredientRecipe = e.ingredient.toLowerCase();
          if (ingredientRecipe.match(ingredientSearch)) exist = true;
        });
        return exist;
      });
    }
    return newRecipes;
  };

  const filteredRecipes = filterRecipes(ingredients, recipes);

  const Chip = ({ text }) => (
    <MaterialChip
      style={styles.ingredient}
      text={text}
      rightIcon={
        <TouchableOpacity onPress={() => deleteIngredient(text)}>
          <IconM name="close-circle-outline" size={19} color={colors.font} />
        </TouchableOpacity>
      }
    />
  );

  useEffect(() => setAlert(false), [search]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={search}
          textAlign={"center"}
          placeholder="¿Qué ingredientes tenés?"
          blurOnSubmit={false}
          onSubmitEditing={setIngredient}
        />
        <TouchableOpacity style={styles.enterIcon} onPress={setIngredient}>
          <Icon
            name="md-checkmark-circle"
            size={35}
            color={colors.greenligth}
          />
        </TouchableOpacity>
      </View>
      {alert ? (
        <Text style={styles.alert}>
          El ingrediente {search} ya está en la lista
        </Text>
      ) : null}

      {ingredients.length ? (
        <View style={styles.ingredients}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ingredients}
            renderItem={({ item }) => <Chip text={item} />}
            keyExtractor={(ingredient) => ingredient}
          />
        </View>
      ) : null}

      <View style={styles.recipes}>
        {filteredRecipes.length ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredRecipes}
            renderItem={({ item }) => <CardRecipe item={item} />}
            keyExtractor={(recipes) => recipes._id}
          />
        ) : null}
      </View>
    </View>
  );
};

export default CookToday;
