import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
  },
  line: {
    marginTop: normalize(30),
  },
  alert: {
    marginHorizontal: 30,
    alignSelf: "flex-start",
    color: colors.carrot,
  },
});
