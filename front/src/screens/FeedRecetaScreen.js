import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions/recipes";
import { fetchCategories } from "../store/actions/categories";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import Recipe from "../components/ListRecipes";

const FeedRecetaContainer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const randomRecipes = recipes; // acá va un filter
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRecipes());
  }, []);

  return (
    <ScrollView>
      <CarouselFeed randomRecipe={randomRecipes} />
      <Categories categorias={categories} />
      <Recipe recipes={recipes} />
    </ScrollView>
  );
};

export default FeedRecetaContainer;
