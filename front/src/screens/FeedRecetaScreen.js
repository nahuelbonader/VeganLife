import React, { useEffect } from "react";
import {  ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions/recipes";
import { fetchCategories } from "../store/actions/categories";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import Recipes from "../components/ListRecipes";
import styles from "../styles/feedRecetaScreen"

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
      <Categories categorias={categories} />
      <CarouselFeed randomRecipe={randomRecipes} />
       <Text style={styles.header}>Más recetas</Text>
      <Recipes recipes={recipes} />
    </ScrollView>
  );
};



export default FeedRecetaContainer;
