import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/listRecipes";

const ListRecipes = ({ recipes }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatlist}
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Recipe", { recipeId: item._id })
            }
            style={styles.touchable}
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
      />
    </View>
  );
};

export default ListRecipes;
