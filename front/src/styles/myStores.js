import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: colors.background,
  },
  alertContainer: {
    flex: 1,
    justifyContent: "center",
  },
  createdMessage: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    fontSize: 17,
  },
  viewMarkets: {
    flex: 7,
    marginHorizontal: "5%",
  },
});
