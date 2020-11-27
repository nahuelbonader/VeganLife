import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    height: normalize(200),
    width: normalize(400),
    margin: normalize(25),
    alignItems: "center",
  },
  logo: {
    height: normalize(145),
    width: normalize(280),
  },
  text: {
    fontSize: normalize(25),
    marginTop: normalize(2),
    color: colors.font,
    textShadowColor: colors.details,
    textShadowOffset: { width: normalize(0), height: normalize(4) },
    textShadowRadius: normalize(5),
  },
});
