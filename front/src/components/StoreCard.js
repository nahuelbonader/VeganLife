import React from "react";
import {
  View,
  Text,
  Image
} from "react-native";
import styles from "../styles/storeCard"


 let today = new Date();

 let actualTime =
   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

 const Opening = ({ open }) => {
   (true && startMorning > actualTime && endMorning < actualTime) ||
   (startNoon > actualTime && endNoon) ? (
     <Text>"Abierto"</Text>
   ) : (
     <Text>"Cerrado"</Text>
   );
 };
 
const StoreCard = ({ name, image, delivery, open, address }) => {


  // let data = {
  //   name: "La huerta de Diego",
  //   image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31499331.jpg",
  //   address: "Melo 123",
  //   products:
  //     "https://assets.bonappetit.com/photos/5ac7d244236415754426a7c1/master/w_4685,h_2635,c_limit/braised-spring-veg-with-miso-polenta.jpg",
  //   delivery: true,
  //   open: [
  //     {open: false,  startMorning: 8, endMorning: 12, startNoon: 14, endNoon: 18 },
  //     { open: true, startMorning: 8, endMorning: 12, startNoon: 13, endNoon: 19 },
  //     { open: true, startMorning: 8, endMorning: 12, startNoon: 13, endNoon: 19 },
  //     { open: true, startMorning: 8, endMorning: 12, startNoon: 13, endNoon: 19 },
  //     {open: true,  startMorning: 8, endMorning: 12, startNoon: 14, endNoon: 19 },
  //     {open: true,  startMorning: 9, endMorning: 12, startNoon: 13, endNoon: 18 },
  //     {open: true,  startMorning: 10, endMorning: 14, startNoon: 16, endNoon: 18 },
  //   ],
  // };
  

  const deliveryYes =   "https://seeklogo.com/images/M/man-silhouette-delivery-logo-0DBA9FBE43-seeklogo.com.png"

  const deliveryNull =
    "https://img.pngio.com/stop-png-images-vector-and-psd-files-free-download-on-pngtree-stop-png-360_360.png";
  
      
    return (
      <View>
        <View
          style={styles.container}
          onPress={() => console.log("apretaste la card del store")}
        >
          <View style={styles.upper}>
            <Image style={styles.image} source={{ uri: data.image }} />
         <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.upper}>
            <Image style={styles.products} source={{ uri: data.products }} />
            <Image style={styles.products} source={{ uri: data.products }} />
            <Image style={styles.products} source={{ uri: data.products }} />
          </View>
          <View style={styles.info}>
            <Text style={styles.address}>{address}</Text>
            <Image
              style={styles.delivery}
              source={{ uri: delivery ? deliveryYes : deliveryNull }}
            />
            <Opening />
          </View>
        </View>
      </View>
    );}


export default StoreCard