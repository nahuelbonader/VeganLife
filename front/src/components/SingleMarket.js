import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import ProductsByStore from './ProductsByStore'
import styles from "../styles/singleMarket"
import { banner, location } from "../utils/constants"



const SingleMarket = ({ route }) => {

 
const storeId = route.params.storeId
const stores = useSelector((state) => state.storesReducer.stores);
const allProducts = useSelector((state) => state.productsReducer.products);
const [myMarket] = stores.filter((s)=>s._id === storeId)
 console.log(myMarket, "merca2");
return (
  <View>
    <ImageBackground
      style={styles.banner}
      source={{
        uri: banner,
      }}
    ></ImageBackground>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: myMarket.image }} />
      <View style={styles.info}>
        <Text
          style={styles.delivery}
          source={{ uri: myMarket.delivery ? "Yes" : "No" }}
        ></Text>
        <Text style={styles.address}>delivery</Text>
        <Text style={styles.address}>Abierto</Text>
      </View>

      <Text style={styles.title}>{myMarket.name}</Text>

      {/* <Text style={styles.delivery}>{myMarket.delivery}</Text> */}
      <Text style={styles.address}>{myMarket.address}</Text>
      <Text style={styles.hour}>Días: Lunes a Viernes</Text>
      <Text style={styles.hour}>Horario: 9-21 hrs</Text>

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
  </View>
);
}

  
  export default SingleMarket;
  