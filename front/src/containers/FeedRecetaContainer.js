import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import Categories from '../screens/Categories'
import CarouselFeed from '../screens/CarouselFeed'
import axios from "axios"



const FeedRecetaContainer = () => {

    const [categorias, setCategorias] = useState([]) 

    useEffect(()=> {
        axios.get('http://192.168.0.103:1337/api/categories')
        .then((res)=> setCategorias(res.data))}, [])

  return <>
        <CarouselFeed />
        <Categories categorias={categorias}/>
    </>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default FeedRecetaContainer;
