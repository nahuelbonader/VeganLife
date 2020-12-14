import React from "react";
import MapView from "react-native-maps";
import { Text, View, Dimensions } from "react-native";
import styles from "../styles/map"
import { useNavigation } from "@react-navigation/native";


//después va a ser screen!! 


const Map = () => {

  const navigation = useNavigation();
     return (
      <View style={styles.container}>
        <Text>HOLA</Text>
         <MapView style={styles.mapStyle} />
      </View>
    );
  }

  export default Map;