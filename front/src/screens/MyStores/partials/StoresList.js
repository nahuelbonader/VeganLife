import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { storeImg } from "../../../utils/constants";
import styles from "../../Search/styles/recipeCard";
import styless from "../styles/storesList";

export default ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styless.container}>
      <FlatList
        contentContainerStyle={{ justifyContent: "center" }}
        style={styless.list}
        keyExtractor={(content) => content._id}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CommercePanel", { storeId: item._id })
              }
              style={styles.touchableContainer}
            >
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={item.image ? { uri: item.image } : storeImg}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styless.description}>
                    {item.description.length > 34
                      ? item.description.substr(0, 34) + "..."
                      : item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
