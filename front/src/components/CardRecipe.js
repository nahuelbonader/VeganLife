import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardRecipe = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { recipeId: item._id })}
    >
      <ImageBackground
        style={styles.image}
        imageStyle={styles.border}
        source={{ uri: item.image }}
      >
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 15,
    padding: 60,
    textShadowColor: "green",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    width: 350,
    height: 220,
    marginTop: 15,
  },
  border: {
    borderRadius: 10,
  },
});

export default CardRecipe;
