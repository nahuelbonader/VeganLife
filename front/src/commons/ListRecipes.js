import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
  },
  flatlist: {
    marginVertical: 10,
  },
  touchable: {
    marginHorizontal: 5,
    marginBottom: 10,
    width: 170,
    height: 170,
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 5,
    paddingVertical: 50,
    paddingHorizontal: 35,
    textShadowColor: "black",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 2,
    opacity: 50,
  },
  image: {
    width: 170,
    height: 170,
  },
  border: {
    borderRadius: 20,
  },
  header: {
    color: "green",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "300",
    textTransform: "uppercase",
  },
});

export default ListRecipes;
