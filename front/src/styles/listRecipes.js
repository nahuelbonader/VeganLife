import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    marginLeft: normalize(10),
    marginRight: normalize(10),
    alignItems: "center",
    marginTop: normalize(10),
    marginBottom: normalize(10),
    backgroundColor: "white",
    borderRadius: normalize(20),
  },
  text: {
    fontSize: normalize(15),
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: normalize(5),
    paddingTop: normalize(50),
    paddingBottom: normalize(50),
    paddingLeft: normalize(35),
    paddingRight: normalize(35),
    textShadowColor: "black",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 2,
    opacity: 50,
  },
  image: {
    marginLeft: normalize(5),
    marginRight: normalize(5),
    width: normalize(170),
    height: normalize(170),
    marginTop: normalize(5),
    marginBottom: normalize(5),
  },
  border: {
    borderRadius: normalize(20),
  },
  header: {
    color: "green",
    marginLeft: normalize(20),
    marginTop: normalize(2),
    fontSize: normalize(20),
    fontWeight: "300",
    textTransform: "uppercase",
  },
});

export default styles