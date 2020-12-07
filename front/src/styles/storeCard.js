import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    backgroundColor: "lightgrey",
    alignContent: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  upper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    marginLeft: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    marginTop: 40,
     color: "green",
    textTransform: "uppercase",
  },
  image: {
    flexDirection: "row",
    marginLeft: 35,
    marginTop: 20,
    height: 65,
    width: 65,
    borderRadius: 50,
  },
  delivery: {
    height: 20,
    width: 20,
  },
  products: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    height: 85,
    width: 85,
    borderRadius: 50,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",  
  },
  address: {
    color: "green",
    fontSize: 13,
    fontWeight: "300",
    textTransform: "uppercase",
  },
  open: {
    color: "green",
    fontSize: 13,
    fontWeight: "300",
    textTransform: "uppercase",
  },
 
});


export default styles