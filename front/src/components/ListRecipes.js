import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListRecipes = ({ recipes }) => {
  const navigation = useNavigation();

  return (
    <View style={{ width: 1000 }}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Recipe", { recipeId: item._id })
            }
          >
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: item.image }}
            ></Image>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(recipes) => recipes._id}
        // numColumns={2}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default ListRecipes;
