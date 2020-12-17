import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import ProductsByStore from './ProductsByStore'
import styles from "../styles/singleMarket"
import { banner, location } from "../utils/constants"
import Icon from "react-native-vector-icons/Ionicons";



const SingleMarket = ({ route }) => {

 
const storeId = route.params.storeId
const stores = useSelector((state) => state.storesReducer.stores);
const allProducts = useSelector((state) => state.productsReducer.products);
const [myMarket] = stores.filter((s)=>s._id === storeId)
 console.log(myMarket, "merca2");

const deliveryYes =
  "https://seeklogo.com/images/M/man-silhouette-delivery-logo-0DBA9FBE43-seeklogo.com.png";

const deliveryNull =
  "https://img.pngio.com/stop-png-images-vector-and-psd-files-free-download-on-pngtree-stop-png-360_360.png";



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
        <View style={styles.delivery}>
          <Icon style={{}} name="bicycle" size={30} />
          {stores.delivery ? (
            <Icon style={{}} name="checkmark" size={30} color="#35b056" />
          ) : (
            <Icon style={{}} name="close" size={30} color="red" />
          )}
        </View>

        <Text style={styles.open}>ABIERTO</Text>
      </View>

      <Text style={styles.title}>{myMarket.name}</Text>
      <View style={styles.infoDos}>
        <Icon style={{}} name="location-outline" size={30} />
        <Text style={styles.address}>{myMarket.address}</Text>
      </View>
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
  