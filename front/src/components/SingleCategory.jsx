import React from "react";
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import normalize from "react-native-normalize";

const SingleCategory = ({ recipes, categoryImage }) => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white", paddingBottom: 150 }}>
      <View style={styles.viewStyle}>
        <Image
          style={styles.image}
          source={{ uri: categoryImage[0] !== "" ? categoryImage[0] : null }}
        />
      </View>
      <FlatList
        keyExtractor={(recipes) => recipes.title}
        data={recipes}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Recipe", { recipeId: item._id })
                }
              >
                <View style={styles.listView}>
                  <Text style={styles.title}>
                    {item.title.substr(0, 30) + "..."}
                  </Text>
                  <View style={styles.itemData}>
                    <Image
                      style={styles.listImage}
                      source={{ uri: item.image !== "" ? item.image : null }}
                    />
                    <Text style={styles.description}>
                      {item.ingredients[0].substr(0, 90) + "..."}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: normalize(20),
    height: normalize(180),
    flexDirection: "row",
  },
  image: {
    borderRadius: normalize(20),
    flex: 1,
  },
  listView: {
    alignItems: "center",
    backgroundColor: "#F1F4FB",
    marginBottom: "2%",
    marginHorizontal: "5%",
    borderRadius: normalize(25),
    paddingVertical: normalize(20),
  },
  title: {
    alignSelf: "flex-start",
    marginLeft: "8%",
    marginBottom: "1%",
    fontWeight: "bold",
    fontSize: normalize(19),
  },
  itemData: {
    flex: 1,
    margin: "2%",
    flexDirection: "row",
  },
  listImage: {
    flex: 0.7,
    width: "60%",
    borderRadius: normalize(100),
    marginHorizontal: "2%",
  },
  description: {
    flex: 2,
    marginTop: "2%",
    color: "#808080",
    marginHorizontal: "2%",
  },
});

export default SingleCategory;
