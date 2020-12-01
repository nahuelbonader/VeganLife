import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import SingleCategory from "../components/SingleCategory";

const SingleCategoryScreen = ({ route }) => {
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const category = categories.filter((c) => c._id == route.params.categoryId);
  const recipesCategory = recipes.filter(
    (r) => r.category._id == route.params.categoryId
  );

  return (
    <SingleCategory
      recipes={recipesCategory}
      categoryImage={category[0].image}
    />
  );
};

export default SingleCategoryScreen;
