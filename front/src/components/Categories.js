import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import styles from "../styles/categories";

const Categories = ({ categorias }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Categorias</Text>
      <FlatList
        data={categorias}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log("click en category");
              }}
            >
              <Image style={styles.image} source={{ uri: item.image }}></Image>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(categorias) => categorias._id}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default Categories;
