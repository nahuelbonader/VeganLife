import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { userIcon } from "../utils/constants";
import Recipe from "./CardRecipe";
import normalize from "react-native-normalize";

const ListRecipes = ({ recipes, title }) => (
  <View style={styles.recipesContainer}>
    <Text style={styles.recipesTitle}>{title}</Text>
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
      keyExtractor={(recipes) => recipes._id}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const Data = ({ amount, title }) => (
  <View style={styles.stats}>
    <Text style={styles.statAmount}>{amount}</Text>
    <Text style={styles.statTitle}> {title} </Text>
  </View>
);
const img =
  "https://s1.eestatic.com/2020/08/17/curiosidades/naturaleza-planeta-tierra/Oceanos-Curiosidades-Ciencias_naturales-Naturaleza_y_planeta_Tierra_513709574_157873471_1706x960.jpg";
const Profile = ({ name, image, favsRecipes, ownRecipes }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.portada} source={{ uri: img }}>
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
        <Data amount={45} title="Seguidores" />
      </View>
      <ListRecipes recipes={ownRecipes} title="Publicadas" />
      <ListRecipes recipes={favsRecipes} title="Favoritas" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  portada: {
    width: "100%",
    flex: 1,
    marginBottom: normalize(30),
  },
  subContainer: {
    position: "absolute",
    alignSelf: "center",
    marginTop: normalize(85),
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: normalize(70),
    borderWidth: 3,
    borderColor: "#C3C5CD",
  },
  name: {
    position: "absolute",
    marginTop: normalize(135),
    marginLeft: normalize(10),
    fontSize: normalize(18),
    fontWeight: "bold",
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: normalize(50),
  },
  stats: {
    alignItems: "center",
    flex: 1,
  },
  statAmount: {
    color: "#4F566D",
    fontSize: 18,
    fontWeight: "300",
  },
  statTitle: {
    color: "#C3C5CD",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 4,
  },
  recipesContainer: {
    flex: 1.5,
  },
  recipesTitle: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginLeft: normalize(10),
    marginBottom: normalize(7),
  },
  recipeText: {
    opacity: 0,
  },
  recipeImage: {
    width: 200,
    height: 150,
    marginHorizontal: normalize(5),
  },
  recipeBorder: {
    borderRadius: 15,
  },
});

export default Profile;
