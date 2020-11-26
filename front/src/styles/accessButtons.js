import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    height: normalize(210),
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: normalize(460),
  },
  btn: {
    backgroundColor: colors.button,
    borderRadius: normalize(25),
    height: normalize(50),
    width: normalize(270),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, // IOS
    elevation: 5, // Android
  },
  btn_text: {
    fontSize: normalize(20),
    color: colors.white,
  },
  text_container: {
    flexDirection: "row",
  },
  text: {
    fontSize: normalize(17),
    marginHorizontal: normalize(7),
    color: colors.font,
    alignSelf: "flex-start",
  },
  invitation: {
    fontSize: normalize(17),
    color: colors.font,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
});
