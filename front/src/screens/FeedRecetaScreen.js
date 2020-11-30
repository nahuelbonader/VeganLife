import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomRecipe } from '../actions/recetas'
import IP from "../../env";



const FeedRecetaContainer = ({navigation}) => {
  const [categorias, setCategorias] = useState([]);

  const dispatch = useDispatch();
  const randomRecipe = useSelector((state) => state.randomRecipe.randomRecipe);




  useEffect(() => {
    axios
      .get(`http://${IP}:1337/api/categories`)
      .then((res) => setCategorias(res.data));
    dispatch(fetchRandomRecipe())
  }, []);



  return (
    <>
      <Button title='profile' onPress={()=>navigation.navigate('Profile')}></Button>
      <CarouselFeed randomRecipe={randomRecipe}/>
      <Categories categorias={categorias} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default FeedRecetaContainer;
