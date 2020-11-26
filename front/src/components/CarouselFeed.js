import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Carousel from 'react-native-snap-carousel';

let Cat = [{name: "Ensalada", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Panchos", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Hamburguesas", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Banana", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Manzana", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Naranja", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Kiwi", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "Kiwi", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "asd", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "eft", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"},{name: "vfr", image: "https://t1.rg.ltmcdn.com/es/images/1/7/7/ensalada_de_apio_tomate_y_aguacate_60771_orig.jpg"}]

const CarouselFeed = () => {
  return <View>
  <Text style={styles.container}> Receta del dia </Text>
  <Carousel
      style={styles.carousel}
      data={Cat}
      sliderWidth={400}
      itemWidth={400}
     
      renderItem={({item})=>{
       return <TouchableOpacity  onPress={()=>{console.log("ESTOY EN CAROUSEL")}}>
       
       <Image style={styles.image} source={{uri: item.image}}></Image>
        <Text style={styles.text}> {item.name} </Text>
        
        </TouchableOpacity>
      }}
    >
  
</Carousel>
</View>
};

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    fontSize: 42,
    textAlign: "center" 

  },
  text: {
    fontSize: 30,
    textAlign: "center"

  },
  image: {
    marginTop: 25,
    // justifyContent: "center",
    // alignItems: "center",  
    // flex: 3,
    width: 400,
    height:250,
    marginLeft: 20,
    borderRadius: 8
  }, 
  carousel: {
    borderRadius: 5,
  }
});

export default CarouselFeed;
