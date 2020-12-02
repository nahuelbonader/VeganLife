import colors from "./colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    borderRadius: 18,
    textAlign: "center",
  },
  carousel: {
    borderRadius: 5,
  },
  textContainer: {
    fontSize: 20,
    color: colors.font,
    marginLeft: 15,
    fontWeight: "300",
    marginTop: 5,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 15,
    color: colors.font,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "200",
    marginTop: 5,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 130,
  },
});

export default styles;
