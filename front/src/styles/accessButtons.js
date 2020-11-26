import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: { position: "absolute", top: 510 },
  btn: {
    backgroundColor: colors.button,
    borderRadius: 25,
    height: 55,
    width: 270,
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
    fontSize: 20,
    color: colors.white,
  },
  text_container: {
    top: 140,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    marginHorizontal: 5,
    color: colors.font,
  },
  invitation: {
    fontSize: 16,
    color: colors.font,
    fontWeight: "bold",
  },
});
