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
    borderRadius: normalize(20),
    flex: 1,
    marginLeft: normalize(10),
    marginRight: normalize(10),
    marginTop: normalize(5),
    shadowColor: "black",
  },
  viewProfile: {
    flexDirection: "row",
    marginHorizontal: normalize(30),
    textAlign: "center",
    alignSelf: "center",
    marginRight: normalize(50)
  },
  profilePic: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(50),
  },
  name: {
    marginLeft: normalize(10),
    color: "green",
    top: normalize(3),
    fontSize: normalize(20),
    fontWeight: "200",
  },
  viewThree: {
    borderRadius: normalize(25),
    backgroundColor: "white",
    paddingBottom: normalize(70),
    marginTop: normalize(5),
    marginLeft: normalize(10),
    marginRight: normalize(10),
  },
  title: {
    marginTop: normalize(15),
    marginBottom: normalize(15),
    color: "green",
    fontSize: normalize(25),
    textAlign: "center",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: normalize(10),
    fontWeight: "300",
  },
  text: {
    textTransform: "uppercase",
    color: "green",
    fontSize: normalize(16),
    marginTop: normalize(15),
    marginBottom: normalize(10),
    marginLeft: normalize(10),
    marginRight: normalize(10),
    fontWeight: "300",
  },
  textTwo: {
    color: "black",
    fontSize: normalize(13),
    marginBottom: normalize(5),
    textAlign: "justify",
    marginLeft: normalize(10),
    marginRight: normalize(10),
    fontWeight: "300",
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
  favIcon: {
    alignSelf: "center",
    top: normalize(11),
    fontSize: normalize(25),
  },
});

export default styles