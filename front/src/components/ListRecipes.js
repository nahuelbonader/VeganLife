import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/listRecipes"

const ListRecipes = ({ recipes }) => {
  const navigation = useNavigation();


  return (
    <View>
      
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.container}
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Recipe", { recipeId: item._id })
            }
          >
            <ImageBackground
              style={styles.image}
              imageStyle={styles.border}
              source={{ uri: item.image }}
            >
              <Text style={styles.text}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
        keyExtractor={(recipes) => recipes._id}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};



export default ListRecipes;
