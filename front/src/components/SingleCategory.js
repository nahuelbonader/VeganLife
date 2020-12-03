import React from "react";
import { View, Image, Text } from "react-native";
import ListRecipes from "./ListRecipes";
import styles from "../styles/singleCategory";

const SingleCategory = ({ recipes, categoryImage, categoryName }) => (
  <View style={styles.container}>
    
    <Text style={styles.categories}>{categoryName}</Text>
    <View>
      {/* <Image
        style={styles.image}
        source={{ uri: categoryImage !== "" ? categoryImage : null }}
      /> */}
    </View>
    <ListRecipes recipes={recipes} />
  </View>
);

export default SingleCategory;
