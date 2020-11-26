import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/logo";

const Logo = ({ text }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Logo;
