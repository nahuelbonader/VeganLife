import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.white,
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
