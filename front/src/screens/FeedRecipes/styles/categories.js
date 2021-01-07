import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderRadius: 15,
    borderBottomColor: colors.mediumGray,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
  },
  carousel: {
    borderRadius: 5,
    paddingLeft: 10,
  },
  title: {
    marginTop: 5,
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
    textTransform: "uppercase",
    fontWeight: "300",
    marginTop: 5,
  },
  image: {
    width: 75,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 130,
  },
});
