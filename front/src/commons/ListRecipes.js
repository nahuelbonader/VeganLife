import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListRecipes = ({ recipes }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.flatlist}> */}
      {recipes.map((item) => (
        <TouchableOpacity
          key={item._id}
          onPress={() => navigation.navigate("Recipe", { recipeId: item._id })}
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
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
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
