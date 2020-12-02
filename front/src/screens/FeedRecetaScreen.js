import React, { useEffect } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions/recipes";
import { fetchCategories } from "../store/actions/categories";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import Recipes from "../components/ListRecipes";

const FeedRecetaContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const randomRecipes = recipes; // acá va un filter
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRecipes());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <CarouselFeed randomRecipe={randomRecipes} />
      <Categories categorias={categories} />
      <Recipes recipes={recipes} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedRecetaContainer;
