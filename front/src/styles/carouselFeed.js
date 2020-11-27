import colors from "./colors";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    color: colors.font,
    marginTop: 10,
    fontSize: 35,
    textAlign: "center",
    backgroundColor: "#E5E1E0",
  },
  text: {
    fontSize: 20,
    color: colors.font,
    textAlign: "center",
  },
  image: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 140,
    marginLeft: 7,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 18,
  },
  carousel: {
    borderRadius: 5,
  },
});

export default styles