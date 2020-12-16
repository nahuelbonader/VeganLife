import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import normalize from "react-native-normalize";

export default ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <MaterialIcons name="arrow-back" size={24} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: normalize(30),
    width: normalize(30),
    backgroundColor: colors.dartmouthGreen,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
