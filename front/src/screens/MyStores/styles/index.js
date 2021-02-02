import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: colors.background,
    width: "100%",
  },
  alertContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
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
  },
});
