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
 
 
    

// ({stores})


const StoreCard = () => {


  let data = 
    {
      name: "La huerta de Diego",
      image:
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31499331.jpg",
      address: "Melo 123",
      products:
        "https://assets.bonappetit.com/photos/5ac7d244236415754426a7c1/master/w_4685,h_2635,c_limit/braised-spring-veg-with-miso-polenta.jpg",
      delivery: true,
      // open: { open: true, startMorning: 8, endMorning: 12, startNoon: 14, endNoon: 18 },
      open: "Cerrado",
    }
  

  const deliveryYes =   "https://seeklogo.com/images/M/man-silhouette-delivery-logo-0DBA9FBE43-seeklogo.com.png"

  const deliveryNull =
    "https://img.pngio.com/stop-png-images-vector-and-psd-files-free-download-on-pngtree-stop-png-360_360.png";
  
  
//  let today = new Date();

//  let actualTime =
//    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// let weekday = today.getDate();

  
//     const Opening = () => {
//       (open && startMorning>actualTime && endMorning < actualTime || startNoon > actualTime && endNoon) ?  "Abierto" : "Cerrado"
//      }

    
  
    return (
      <View>
        <View
          style={styles.container}
          onPress={() => console.log("apretaste la card del store")}
        >
          <View style={styles.upper}>
            <Image style={styles.image} source={{ uri: data.image }} />
            
            <Text style={styles.title}>{data.name}</Text>
          </View>
          <View style={styles.upper}>
            <Image style={styles.products} source={{ uri: data.products }} />
            <Image style={styles.products} source={{ uri: data.products }} />
            <Image style={styles.products} source={{ uri: data.products }} />
          </View>
          {/* <FlatList
          data={data}
          renderItem={({products}) => (
              <Image
                style={styles.products}
                source={{ uri: products }}
              ></Image>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
          <View style={styles.info}>
            <Text style={styles.address}>{data.address}</Text>
            <Image style={styles.delivery} source={{ uri: data.delivery ? deliveryYes : deliveryNull }} />
            <Text style={styles.open}>{data.open}</Text>
          </View>
        </View>
      </View>
    );}


export default StoreCard