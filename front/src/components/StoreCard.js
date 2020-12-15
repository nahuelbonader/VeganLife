import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import styles from "../styles/storeCard"
import { useNavigation } from "@react-navigation/native";

const StoreCard = ({stores, allProducts}) => {  

  const deliveryYes = "https://seeklogo.com/images/M/man-silhouette-delivery-logo-0DBA9FBE43-seeklogo.com.png"

  const deliveryNull = "https://img.pngio.com/stop-png-images-vector-and-psd-files-free-download-on-pngtree-stop-png-360_360.png";
  
//  let today = new Date();
//  let actualTime =
//    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let weekday = today.getDate();
//     const Opening = () => {
//       (open && startMorning>actualTime && endMorning < actualTime || startNoon > actualTime && endNoon) ?  "Abierto" : "Cerrado"
//      }


const myProducts = allProducts.filter((p) => p.store._id === stores._id);
const navigation = useNavigation(); 
  
    return (
      <View>
        <View
          style={styles.container}
        >
          <View style={styles.upper}>
            <Image style={styles.image} source={{ uri: stores.image }} />
            
            <Text style={styles.title}>{stores.name}</Text>
          </View>

          <FlatList
              contentContainerStyle={styles.upper}
              data={myProducts}
              renderItem={({ item }) => (
              <TouchableOpacity
                onPress={()=>navigation.navigate('SingleProduct', { productId: item._id })}
              >
                <Image style={styles.products} source={{ uri: item.image }} />
              </TouchableOpacity>
            )
          }
        keyExtractor={(allProducts) => allProducts._id}
        horizontal
        showsHorizontalScrollIndicator={false}

      />

          
          <View style={styles.info}>
            <Text style={styles.address}>{stores.address}</Text>
            <Image style={styles.delivery} source={{ uri: stores.delivery ? deliveryYes : deliveryNull }} />
            {/* <Text style={styles.open}>{stores.open}</Text> */}
          </View>
        </View>
      </View>
    );}


export default StoreCard