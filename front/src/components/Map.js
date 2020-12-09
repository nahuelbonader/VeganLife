import React from "react";
import MapView from "react-native-maps";
import { Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/map"

//después va a ser screen!! 


const Map = () => {
     return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }

  export default Map;