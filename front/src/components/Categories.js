import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Categories = ({ categorias }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Categorias</Text>
      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log("Touch en una categoria")}
          >
            <Image style={styles.image} source={{ uri: item.image }}></Image>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(categorias) => categorias._id}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#E5E1E0",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 18,
    marginLeft: 20,
    textAlign: "center",
  },
  image: {
    // justifyContent: "center",
    // alignItems: "center",
    // flex: 3,
    width: 100,
    height: 100,
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 100,
  },
});

export default Categories;
