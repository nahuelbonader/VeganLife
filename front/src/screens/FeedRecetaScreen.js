import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import CarouselFeed from "../components/CarouselFeed";
import axios from "axios";
import IP from "../../env";



const FeedRecetaContainer = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${IP}:1337/api/categories`)
      .then((res) => setCategorias(res.data));
  }, []);

  return (
    <>
     
      <CarouselFeed />
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
