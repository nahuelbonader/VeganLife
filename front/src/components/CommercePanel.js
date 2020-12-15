import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { userIcon } from "../utils/constants";
import Tabs from "./Tabs";
import ProductsList from "./ProductsList";
import Categories from "./CategoriesStore";
import { editStore } from "../store/actions/stores";

import colors from "../styles/colors";

const Panel = ({ commerce, products }) => {
  const dispatch = useDispatch();

  const tabs = {
    products: "Mis productos",
    sales: "Mis ventas",
    categories: "Mis categorías",
  };

  const [tabSelected, setTabSelected] = useState(tabs.products);

  const addCategorie = (categorie) => {
    dispatch(
      editStore({
        ...commerce,
        productsCategories: [...commerce.productsCategories, categorie],
      })
    );
  };

  const deleteCategorie = (categorie) => {
    const productsCategories = commerce.productsCategories.filter(
      (c) => c !== categorie
    );
    dispatch(
      editStore({
        ...commerce,
        productsCategories,
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewUser}>
        <Image
          style={styles.img}
          source={{ uri: commerce.image ? commerce.image : userIcon }}
        />
        <Text style={styles.name}> {commerce.name} </Text>
      </View>

      <Tabs
        tabs={Object.values(tabs)}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        light={true}
      />

      <View style={styles.viewContent}>
        {tabSelected == tabs.products ? (
          <>
            <ProductsList data={products} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Añadir nuevo producto</Text>
            </TouchableOpacity>
          </>
        ) : tabSelected == tabs.sales ? null : tabSelected ==
          tabs.categories ? (
          <Categories
            categories={commerce.productsCategories}
            addCategorie={addCategorie}
            deleteCategorie={deleteCategorie}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: "100%",
  },
  viewUser: {
    flex: 1.5,
    marginHorizontal: "5%",
    backgroundColor: colors.containers,
    flexDirection: "row",
    borderRadius: 35,
    marginTop: "4%",
  },
  img: {
    alignSelf: "center",
    marginHorizontal: "6%",
    width: "15%",
    height: "55%",
    borderRadius: 100,
  },
  name: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  viewOptions: {
    flex: 0.5,
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "1.5%",
  },
  viewContent: {
    flex: 7,
    width: "100%",
  },
  touch1: {
    color: "#85D4A6",
    fontSize: 16,
    fontWeight: "bold",
  },
  touchActive: {
    color: colors.darkGreen,
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderBottomColor: "green",
    fontSize: 17,
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: "6%",
    backgroundColor: colors.darkGreen,
    paddingHorizontal: "15%",
    paddingVertical: "1%",
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#86D3A6",
  },
});

export default Panel;
