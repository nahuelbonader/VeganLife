import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { userIcon } from "../utils/constants";
import Tabs from "../components/Tabs";
import Products from "../components/ProductsStore";
import Categories from "../components/CategoriesStore";
import { editStore } from "../store/actions/stores";
import { createProduct } from "../store/actions/products";

import colors from "../styles/colors";
import normalize from "react-native-normalize";

export default ({ route }) => {
  const tabs = {
    products: "Mis productos",
    sales: "Mis ventas",
    categories: "Mis categorías",
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { products } = useSelector((state) => state.productsReducer);
  const { stores } = useSelector((state) => state.storesReducer);
  const { user } = useSelector((state) => state.usersReducer);

  const [store] = stores.filter((s) => s._id == route.params.storeId);
  const productsStore = products.filter((el) => el.store._id == store._id);
  const [tabSelected, setTabSelected] = useState(tabs.products);

  const addCategorie = (categorie) => {
    dispatch(
      editStore({
        ...store,
        productsCategories: [...store.productsCategories, categorie],
      })
    );
  };

  const deleteCategorie = (categorie) => {
    const productsCategories = store.productsCategories.filter(
      (c) => c !== categorie
    );
    dispatch(
      editStore({
        ...store,
        productsCategories,
      })
    );
  };

  const addProduct = (product) => {
    dispatch(createProduct({ ...product, store: store._id }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewUser}>
        <Image
          style={styles.img}
          source={{ uri: store.image ? store.image : userIcon }}
        />
        <Text style={styles.name}> {store.name} </Text>
        {store.superAdmin === user._id ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SuperAdminCommerce", {
                storeId: store._id,
                admins: store.admins,
              })
            }
            style={styles.button2}
          >
            <Octicons name="gear" size={24} color="#bfe3bf" />
          </TouchableOpacity>
        ) : null}
      </View>

      <Tabs
        tabs={Object.values(tabs)}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        light={true}
      />

      <View style={styles.viewContent}>
        {tabSelected == tabs.products ? (
          <Products
            products={productsStore}
            categories={store.productsCategories}
            addProduct={addProduct}
          />
        ) : tabSelected == tabs.sales ? null : tabSelected ==
          tabs.categories ? (
          <Categories
            categories={store.productsCategories}
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
  button2: {
    backgroundColor: colors.greenligth,
    position: "absolute",
    right: "8.5%",
    top: "36%",
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(7),
    borderRadius: 30,
  },
});
