import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    marginTop: "1%",
    backgroundColor: colors.mediumGray,
    borderRadius: 8,
    height: "70%",
    width: "100%",
    flexDirection: "row",
  },
  touchable: {
    width: "100%",
  },
  searchIcon: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  input: {
    width: "100%",
    flex: 9.5,
    fontSize: 20,
    paddingLeft: 12,
  },
  deleteIcon: {
    flex: 0.8,
    marginVertical: 8,
    marginHorizontal: "4%",
  },
});
