import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-snap-carousel";


const CarouselFeed = ({randomRecipe}) => {

//console.log(randomRecipe)

  return (
    <View>
      <Text style={styles.container}> Receta del dia </Text>
      <Carousel
        style={styles.carousel}
        data={randomRecipe}
        sliderWidth={400}
        itemWidth={400}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("ESTOY EN CAROUSEL");
            }}
          >
            <Image style={styles.image} source={{ uri: item.image }}></Image>
            <Text style={styles.text}> {item.title} </Text>
          </TouchableOpacity>
        )}
      >

      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    fontSize: 42,
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  image: {
    marginTop: 25,
    // justifyContent: "center",
    // alignItems: "center",
    // flex: 3,
    width: 400,
    height: 250,
    marginLeft: 20,
    borderRadius: 8,
  },
  carousel: {
    borderRadius: 5,
  },
});

export default CarouselFeed;
