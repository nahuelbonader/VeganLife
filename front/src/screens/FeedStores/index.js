import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchStores } from "../../store/actions/stores";
import StoreCard from "./partials/StoreCard";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const StoreFeed = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.storesReducer.stores);
  const allProducts = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchStores());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SingleMarket", { storeId: item._id })
            }
          >
            <StoreCard store={item} allProducts={allProducts} />
          </TouchableOpacity>
        )}
        keyExtractor={(store) => store._id}
      />
    </View>
  );
};

export default StoreFeed;

// ESTE COMPONENETE RENDERIZA EN UNA FLATLIST EL STORECARD Y LE PASA LA DATA POR PROPS
