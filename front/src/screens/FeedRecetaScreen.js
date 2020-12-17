import React, { useEffect, useState } from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions/recipes";
import { fetchCategories } from "../store/actions/categories";
import { fetchUser, fetchUsers } from "../store/actions/users";
import { fetchStores } from "../store/actions/stores";
import { fetchFavsRecipes } from "../store/actions/favourites";
import { fetchProducts } from "../store/actions/products";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import Recipes from "../components/ListRecipes";
import styles from "../styles/feedRecetaScreen";
import firebase from "../utils/Firebase";
import "firebase/auth";

const FeedRecetaScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const user = useSelector((state) => state.usersReducer.user);

  const recipesOrdered = recipes.map((r) => r);
  recipesOrdered.sort((a, b) => a.date < b.date);
  const lastRecipes = recipesOrdered.filter((r, i) => i < 5);

  const checkIfLogged = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        dispatch(fetchUser({ email, fuid: uid })).catch((err) =>
          console.log(err)
        );
      } else navigation.navigate("Login");
    });
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRecipes());
    dispatch(fetchUsers());
    dispatch(fetchStores());
    dispatch(fetchProducts());
    if (!user._id) checkIfLogged();
    if (user._id) dispatch(fetchFavsRecipes(user._id));
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Categories categorias={categories} />
        <CarouselFeed randomRecipe={lastRecipes} />
        <Text style={styles.recipesTitle}>Más recetas</Text>
        <Recipes recipes={recipes} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedRecetaScreen;
