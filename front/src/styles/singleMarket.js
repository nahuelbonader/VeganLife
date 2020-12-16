import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  banner: {
    width: "100%",
    flex: 1.3,
    marginBottom: normalize(30),
  },
  title: {
    fontSize: 30,
    fontWeight: "200",
    marginTop: 25,
    textAlign: "center",
  },
  address: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 5,
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "center"


  },
  productName: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "300",
  },
  location: {
    height: 20,
    width: 20,
  },
});

export default styles;
