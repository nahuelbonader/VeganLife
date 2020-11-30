import React from "react";
import { View, Image } from "react-native";
import ListRecipes from "./ListRecipes";
import styles from "../styles/singleCategory";

const SingleCategory = ({ recipes, categoryImage }) => (
  <View style={styles.container}>
    <View style={styles.viewStyle}>
      <Image
        style={styles.image}
        source={{ uri: categoryImage !== "" ? categoryImage : null }}
      />
    </View>
    <ListRecipes recipes={recipes} />
  </View>
);

export default SingleCategory;
