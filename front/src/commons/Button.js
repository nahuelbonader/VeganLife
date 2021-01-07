import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default ({ onPressBtn, textBtn }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBtn} style={styles.btn}>
        <Text style={styles.btn_text}>{textBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  btn: {
    backgroundColor: colors.button,
    borderRadius: 25,
    height: "20%",
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, // IOS
    elevation: 5, // Android
  },
  btn_text: {
    fontSize: 20,
    color: colors.white,
  },
});
