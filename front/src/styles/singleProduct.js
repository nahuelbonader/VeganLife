import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
   
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  store: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  input: {
    fontSize: 20,
    borderBottomColor: "#35b056",
    borderBottomWidth: 2,
    marginTop: 25,
    padding: 10,
    marginHorizontal: 40,
  },
  boton: {
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "green",
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 75,
    marginBottom: 100,
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "white",
    width: "95%",
    paddingTop: 40,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  submit: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  image: {
    height: "70%",
    width: "80%",
    //flex: 4,
    borderRadius: 25,
  },
});

export default styles;
