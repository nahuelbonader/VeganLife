import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions/recipes";
import { fetchCategories } from "../store/actions/categories";
import { fetchUser } from "../store/actions/users";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import Recipes from "../components/ListRecipes";
import styles from "../styles/feedRecetaScreen";
import firebase from "../utils/Firebase";
import "firebase/auth";

const FeedRecetaContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const user = useSelector((state) => state.usersReducer.user);
  const randomRecipes = recipes; // acá va un filter

  const checkIfLogged = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUser(user.uid));
      } else {
        navigation.navigate("Login");
      }
    });
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRecipes());
    if (!user._id) checkIfLogged();
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
