import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    margin: normalize(10),
    borderRadius: normalize(20),
  },
  flatlist: {
    alignItems: "center",
    flex: 1,
    margin: normalize(10),
  },
  touchable: {
    margin: normalize(5),
    width: normalize(170),
    height: normalize(170),
  },
  text: {
    fontSize: normalize(15),
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    marginTop: normalize(5),
    paddingVertical: normalize(50),
    paddingHorizontal: normalize(35),
    textShadowColor: "black",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 2,
    opacity: 50,
  },
  image: {
    width: normalize(170),
    height: normalize(170),
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

export default styles;
