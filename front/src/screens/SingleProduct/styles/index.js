import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
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
    fontSize: 25,
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
    marginTop: "7%",
    alignItems: "center",
    backgroundColor: "green",
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 75,
    marginBottom: "10%",
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "white",
    width: "95%",
    paddingTop: "5%",
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: colors.mediumGray,
  },
  submit: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  image: {
    height: "70%",
    width: "80%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.mediumGray,
  },
});
