import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.white,
  },
  line: {
    marginTop: 30,
  },
  alert: {
    marginHorizontal: 30,
    alignSelf: "flex-start",
    color: colors.carrot,
  },
});
