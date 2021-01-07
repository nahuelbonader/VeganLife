import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import ListRecipes from "../../commons/ListRecipes";
import styles from "./styles";

export default ({ route }) => {
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const [category] = categories.filter((c) => c._id == route.params.categoryId);
  const recipesCategory = recipes.filter(
    (r) => r.category._id == route.params.categoryId
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <ListRecipes recipes={recipesCategory} />
    </View>
  );
};
