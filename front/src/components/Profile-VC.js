import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { userIcon, portada } from "../utils/constants";
import Recipe from "./CardRecipe";
import styles from "../styles/Profile-VC";

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
      <ImageBackground style={styles.recipesCover} source={portada}>
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

const Profile = ({ name, image, favsRecipes, ownRecipes }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.portada} source={portada}>
        <View style={styles.subContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: image ? image : userIcon }}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
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

export default Profile;
