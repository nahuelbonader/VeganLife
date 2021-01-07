import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/recipeCard";

export default ({ recipe }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { recipeId: recipe._id })}
      style={styles.touchableContainer}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: recipe.image }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.author}> By: {recipe.owner.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
