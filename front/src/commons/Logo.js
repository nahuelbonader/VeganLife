import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default ({ text }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: "80%",
    marginTop: 80,
    alignItems: "center",
  },
  logo: {
    height: "50%",
    width: "70%",
  },
  text: {
    fontSize: 25,
    marginTop: 15,
    color: colors.font,
    textShadowColor: colors.details,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 5,
  },
});
