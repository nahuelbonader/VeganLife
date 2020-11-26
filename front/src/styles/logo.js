import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    height: 210,
    width: 400,
    margin: 20,
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 300,
    marginRight: 0,
  },
  text: {
    fontSize: 25,
    marginTop: 2,
    color: colors.font,
    textShadowColor: colors.details,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 5,
  },
});
