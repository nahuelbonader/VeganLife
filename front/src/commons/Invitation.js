import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default ({ question, onPressInvitation, invitation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{question}</Text>
        <TouchableOpacity onPress={onPressInvitation} style={styles.invitation}>
          <Text style={styles.invitation}>{invitation}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
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
  text_container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 17,
    marginHorizontal: 7,
    color: colors.font,
  },
  invitation: {
    fontSize: 17,
    color: colors.font,
    fontWeight: "bold",
  },
});
