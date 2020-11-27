import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  input: {
    paddingLeft: normalize(7),
    fontSize: normalize(20),
    borderBottomColor: colors.font,
    borderBottomWidth: 1,
    margin: normalize(15),
    height: "75%",
    width: "85%",
  },
});
