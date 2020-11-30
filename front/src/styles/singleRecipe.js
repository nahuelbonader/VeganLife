import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  viewStyle: {
    height: normalize(200),
    flexDirection: "row",
    marginVertical: normalize(12),
  },
  image: {
    borderRadius: normalize(25),
    flex: 1,
  },
  viewProfile: {
    flexDirection: "row",
    marginHorizontal: normalize(30),
  },
  profilePic: {
    width: normalize(65),
    height: normalize(65),
    borderRadius: normalize(50),
  },
  name: {
    alignSelf: "stretch",
    color: "green",
    top: normalize(20),
    marginLeft: normalize(10),
    fontWeight: "bold",
    fontSize: normalize(20),
  },
  viewThree: {
    borderRadius: normalize(25),
    backgroundColor: "white",
    paddingBottom: normalize(70),
    marginTop: normalize(15),
  },
  title: {
    marginTop: normalize(10),
    marginBottom: normalize(15),
    color: "green",
    fontSize: normalize(30),
    textAlign: "center",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: normalize(15),
  },
  text: {
    textTransform: "uppercase",
    color: "green",
    fontSize: normalize(15),
    marginTop: normalize(15),
    marginBottom: normalize(10),
  },
  textTwo: {
    color: "black",
    fontSize: normalize(13),
    marginBottom: normalize(5),
    textAlign: "justify",
  },
  favButton: {
    width: normalize(43),
    height: normalize(43),
    backgroundColor: "white",
    borderRadius: normalize(50),
    position: "absolute",
    right: normalize(30),
    top: normalize(140),
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default styles;
