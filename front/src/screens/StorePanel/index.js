import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { storeImg } from "../../utils/constants";

import { editStore } from "../../store/actions/stores";
import { createProduct, deleteProduct } from "../../store/actions/products";

import Tabs from "../../commons/Tabs";

import Products from "./partials/Products";
import Categories from "./partials/Categories";

import colors from "../../styles/colors";

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
    let success = false;

    return dispatch(createProduct({ ...product, store: store._id })).then(
      (res) => {
        if (res) success = true;
        return success;
      }
    );
  };

  const removeProduct = (product) => {
    dispatch(deleteProduct(product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewUser}>
        <Image
          style={styles.img}
          source={store.image ? { uri: store.image } : storeImg}
        />
        <Text style={styles.name}> {store.name} </Text>
        {store.superAdmin === user._id ? (
          <View style={styles.iconContainer}>
            <Octicons
              onPress={() =>
                navigation.navigate("SuperAdminCommerce", {
                  storeId: store._id,
                  admins: store.admins,
                })
              }
              name="gear"
              size={30}
              color={colors.darkGreen}
            />
          </View>
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
            deleteProduct={removeProduct}
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
    flex: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: colors.containers,
    flexDirection: "row",
    borderRadius: 35,
    marginTop: "3%",
    justifyContent: "center",
  },
  img: {
    flex: 2.5,
    alignSelf: "center",
    marginHorizontal: "6%",
    height: "80%",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    backgroundColor: colors.background,
  },
  name: {
    flex: 8,
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  iconContainer: {
    flex: 1.2,
    color: colors.darkGreen,
    backgroundColor: colors.background,
    borderRadius: 20,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    height: "40%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5%",
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
