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
import Icon from "react-native-vector-icons/Ionicons";
                                                                              import { useNavigation } from "@react-navigation/native";

const StoreCard = ({ stores, allProducts }) => {
  const deliveryYes =
    "https://seeklogo.com/images/M/man-silhouette-delivery-logo-0DBA9FBE43-seeklogo.com.png";

  const deliveryNull =
    "https://img.pngio.com/stop-png-images-vector-and-psd-files-free-download-on-pngtree-stop-png-360_360.png";


console.log("STORES", stores)

const myProducts = allProducts.filter((p) => p.store._id === stores._id);
const navigation = useNavigation(); 
  
    return (
      <View>
        <View
          style={styles.container}
        >
          <View style={styles.subcontainer1}>
            <Image style={styles.image} source={{ uri: stores.image }} />
            
            <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={styles.title}>{stores.name}</Text>
            <Text style={styles.address}>{stores.address}</Text>
            </View>
          </View>
          <View style={styles.linea}></View>
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

<View style={styles.linea}></View>
          <View style={styles.info}>
            <View style={styles.icon}>
            <Icon
                style={{}}
                name="bicycle"
                size={30}
                color="#35b056"
              />
              {stores.delivery ? <Icon
                style={{}}
                name="checkmark"
                size={30}
                color="#35b056"
              />
            :
              <Icon
                style={{}}
                name="close"
                size={30}
                color="red"
              />
            }
              
              </View>
              <Text style={styles.open}>ABIERTO</Text>

          </View>
        </View>
      </View>
  );
};

export default StoreCard;
