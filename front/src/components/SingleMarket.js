import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import ProductsByStore from './ProductsByStore'
import styles from "../styles/singleMarket"




const SingleMarket = ({ route }) => {

 
const storeId = route.params.storeId
const stores = useSelector((state) => state.storesReducer.stores);
const allProducts = useSelector((state) => state.productsReducer.products);
const banner = "https://data.whicdn.com/images/328889501/original.png"
const location = "https://www.flaticon.com/svg/static/icons/svg/927/927667.svg";
const [myMarket] = stores.filter((s)=>s._id === storeId)

return (
  <View style={styles.container}>
    <View>
      <ImageBackground
        style={styles.banner}
        source={{
          uri: banner,
        }}
      ></ImageBackground>
    </View>
    <Image style={styles.image} source={{ uri: myMarket.image }} />

    <Text style={styles.title}>{myMarket.name}</Text>
    <View style={styles.info}>
      <Image style={styles.location} source={{ uri: location }} />
      <Text style={styles.address}>{myMarket.address}</Text>
      <Text style={styles.address}>Abierto</Text>
    </View>
    <Text style={styles.delivery}>{myMarket.delivery}</Text>

    <FlatList
      contentContainerStyle={{}}
      data={myMarket.productsCategories}
      renderItem={({ item, index }) => (
        <View>
          <Text style={styles.productName}>{item}</Text>
          <ProductsByStore category={item} />
        </View>
      )}
      keyExtractor={(index) => index}
    />
  </View>
);
}

  
  export default SingleMarket;
  