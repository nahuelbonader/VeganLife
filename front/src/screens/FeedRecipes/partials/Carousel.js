import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import styles from "../styles/carousel";

const CarouselFeed = ({ randomRecipe }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> V-Cook del Día </Text>
      <Carousel
        data={randomRecipe}
        sliderWidth={410}
        itemWidth={400}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Recipe", { recipeId: item._id })
            }
          >
            <Image style={styles.image} source={{ uri: item.image }}></Image>
            <Text style={styles.text}> {item.title} </Text>
          </TouchableOpacity>
        )}
      ></Carousel>
    </View>
  );
};

export default CarouselFeed;
