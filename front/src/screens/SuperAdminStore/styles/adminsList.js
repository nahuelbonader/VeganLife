import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    height: 65,
    width: "100%",
    backgroundColor: colors.background,
    borderBottomColor: colors.lightGrey,
    marginBottom: "2.5%",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "15%",
    height: "85%",
    borderRadius: 100,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    marginHorizontal: "3%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: "3%",
  },
  button: {
    position: "absolute",
    right: "8%",
  },
  entypo: {
    fontSize: 30,
    color: colors.carrot,
  },
});
