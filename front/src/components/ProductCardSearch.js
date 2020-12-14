import React from "react";
import { storeImg } from "../utils/constants";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/recipeCardSearcher";
import colors from "../styles/colors";
import { useSelector, useDispatch } from "react-redux";
import setSearchBar from '../store/actions/showSearchBar'


export default ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() =>{
        dispatch(setSearchBar(false))
        navigation.navigate("SingleProduct", { productId: item._id })
      }}
      style={styles.touchableContainer}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={item.image ? { uri: item.image } : storeImg}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styless.data}>$ {item.price}</Text>
          <Text style={styless.data}> {item.store.name}</Text>

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
  data: {
    fontWeight: "500",
  },
  description: {
    color: colors.carrot,
    marginBottom: " 3%",
  },
});
