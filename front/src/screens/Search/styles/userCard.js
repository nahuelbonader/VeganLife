import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  touchableContainer: {
    height: 65,
    width: "97%",
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: "2%",
    backgroundColor: colors.background,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingBottom: "2%",
  },
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: "5%",
  },
  image: {
    width: "14%",
    height: "85%",
    borderRadius: 100,
    borderColor: colors.darkGreen,
    borderWidth: 2,
  },
  textContainer: {
    width: "40%",
    height: "100%",
    marginLeft: 15,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
});
