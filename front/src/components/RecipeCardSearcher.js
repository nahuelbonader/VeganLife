import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import setSearchBar from '../store/actions/showSearchBar'

import styles from "../styles/recipeCardSearcher";

export default ({ recipe }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.bottomRouteReducer);

  return (
    <TouchableOpacity
      onPress={() =>{
         dispatch(setSearchBar(false))
         navigation.navigate("Recipe", { recipeId: recipe._id })}
       }
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
