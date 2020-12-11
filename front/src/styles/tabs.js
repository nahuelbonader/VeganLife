import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  tabsContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
  },
  touchActive: {
    color: "black",
    fontWeight: "bold",
    borderBottomWidth: 2,
  },
  touchInactive: {
    color: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
});
