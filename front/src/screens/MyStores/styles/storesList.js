import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    color: colors.carrot,
    marginBottom: " 3%",
  },
  list: {
    width: "100%",
  },
});
