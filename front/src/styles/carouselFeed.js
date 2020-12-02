import colors from "./colors";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    color: colors.font,
    fontSize: 20,
    marginLeft: 15,
    fontWeight: "300",
    textTransform: "uppercase",
    borderRadius: 8,
  },
  text: {
    fontSize: 15,
    color: colors.font,
    textAlign: "center",
    fontWeight: "300",
    textTransform: "uppercase",
    marginTop: 10,
  },
  image: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 180,
    marginLeft: 7,
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