import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    borderBottomColor: colors.mediumGray,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
  },
  title: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 20,
    color: colors.font,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "300",
    textTransform: "uppercase",
    marginTop: 10,
  },
  image: {
    alignSelf: "center",
    width: "95%",
    height: 180,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 18,
  },
});
