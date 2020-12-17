import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    backgroundColor: "#D7DBDD",
    alignContent: "center",
    marginTop: "5%",
    marginHorizontal: "2%",
    borderRadius: 20,
  },
  subcontainer1:{
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "7%"
  },
  upper: {
    flex: 4,
    flexDirection: "row", 
    alignItems: "center",
    marginLeft: "2%"
  },
  title: {
    marginLeft: "10%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    color: colors.font,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  image: {
    flexDirection: "row",
    // marginLeft: 35,
    // marginTop: 20,
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  products: {
    marginLeft: "4%",
    height: 90,
    width: 80,
    borderRadius: 10,
  },
  info: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },
  address: {
    color: colors.font,
    fontSize: 13,
    fontWeight: "300",
    textTransform: "uppercase",
    marginLeft: "10%"
  },
  open: {
    justifyContent: "center", 
    alignItems: "center", 
    fontSize: 16, 
    color: colors.font
  },
  icon: {
    alignItems: "center", 
    flexDirection: "row"
  },
  linea: {
    height: 1,
    width: "90%",
    backgroundColor: "#95A5A6",
    marginHorizontal: "5%"
  }
 
});


export default styles