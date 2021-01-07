import React from "react";
import { storeImg } from "../../../utils/constants";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/recipeCard";
import colors from "../../../styles/colors";

export default ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SingleMarket", { storeId: item._id })}
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
};

const styless = StyleSheet.create({
  description: {
    color: colors.carrot,
    marginBottom: " 3%",
  },
});
