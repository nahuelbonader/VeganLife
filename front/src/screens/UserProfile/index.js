import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import { fetchUserProfile } from "../../store/actions/users";
import Recipe from "../../commons/CardRecipe";
import { userIcon, portada } from "../../utils/constants";
import styles from "./styles";

const ListRecipes = ({ recipes, title }) => (
  <View style={styles.recipesContainer}>
    <Text style={styles.recipesTitle}>{title}</Text>
    {recipes.length ? (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recipes}
        renderItem={({ item }) => (
          <Recipe
            item={item}
            styleImage={styles.recipeImage}
            styleText={styles.recipeText}
            styleBorder={styles.recipeBorder}
          />
        )}
        keyExtractor={(recipe) => recipe._id}
        showsHorizontalScrollIndicator={false}
      />
    ) : (
      <ImageBackground style={styles.recipesCover}>
        <Text style={styles.recipesCoverTitle}>Aún no hay recetas</Text>
      </ImageBackground>
    )}
  </View>
);

const Data = ({ amount, title }) => (
  <View style={styles.stats}>
    <Text style={styles.statAmount}>{amount}</Text>
    <Text style={styles.statTitle}> {title} </Text>
  </View>
);

export default ({ route }) => {
  const { userId } = route.params;
  const { recipes } = useSelector((state) => state.recipesReducer);
  const favsRecipesUser = useSelector(
    (state) => state.favouritesReducer.recipes
  );
  const ownRecipes = recipes.filter((r) => r.owner._id == userId);
  const [user, setUser] = useState({
    name: "",
    image: "",
    favsRecipes: [],
  });

  useEffect(() => {
    fetchUserProfile(userId).then((user) => setUser(user));
  }, [favsRecipesUser, userId]);

  const { name, image, favsRecipes } = user;

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.portada} source={portada}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: image ? image : userIcon }}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.statsContainer}>
        <Data amount={ownRecipes.length} title="Recetas" />
        <Data amount={favsRecipes.length} title="Favoritos" />
        <Data amount={0} title="Seguidores" />
      </View>
      <ListRecipes recipes={ownRecipes} title="Publicadas" />
      <ListRecipes recipes={favsRecipes} title="Favoritas" />
    </View>
  );
};
