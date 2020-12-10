import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  touchableContainer: {
    height: normalize(65),
    width: "97%",
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: "1.5%",
    backgroundColor: colors.background,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
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
    width: "15%",
    height: "80%",
    borderRadius: 100,
    borderColor: colors.darkGreen,
    borderWidth: 2,
  },
  textContainer: {
    width: "40%",
    height: "100%",
    marginLeft: normalize(15),
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
});
