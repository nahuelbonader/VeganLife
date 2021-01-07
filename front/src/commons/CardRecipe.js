import React from "react";
import { Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardRecipe = ({ item, styleImage, styleText, styleBorder }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { recipeId: item._id })}
    >
      <ImageBackground
        style={styleImage}
        imageStyle={styleBorder}
        source={{ uri: item.image }}
      >
        <Text style={styleText}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardRecipe;
