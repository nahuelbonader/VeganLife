import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/listRecipes";

const ListRecipes = ({ recipes }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ListRecipes;
