import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../styles/carouselFeed"
import Carousel from 'react-native-snap-carousel';


const CarouselFeed = ({randomRecipe}) => {
  return (
    <View>
      <Text style={styles.container}> V-Cook del día </Text>
      <Carousel
        style={styles.carousel}
        data={randomRecipe}
        sliderWidth={410}
        itemWidth={400}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log("ESTOY EN CAROUSEL");
              }}
            >
              <Image style={styles.image} source={{ uri: item.image }}></Image>
              <Text style={styles.text}> {item.title} </Text>
            </TouchableOpacity>
          );
        }}
      ></Carousel>
    </View>
  );
};

export default CarouselFeed;
