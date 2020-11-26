import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  input: {
    paddingLeft: normalize(7),
    fontSize: normalize(20),
    borderBottomColor: colors.font,
    borderBottomWidth: 1,
    margin: normalize(15),
    height: normalize(40),
    width: normalize(320),
  },
});
