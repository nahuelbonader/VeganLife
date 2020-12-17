import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    backgroundColor: colors.mediumGray,
    alignContent: "center",
    justifyContent: "center",
    marginTop: "5%",
    marginHorizontal: "2%",
    borderRadius: 20,
  },
  subcontainer1: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "7%",
  },
  listContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "7%",
    borderTopColor: colors.darkGray,
    borderTopWidth: 1,
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    borderRadius: 20,
  },
  upper: {
    flex: 1,
    //width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: "10%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    color: colors.font,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  image: {
    flexDirection: "row",
    // marginLeft: 35,
    // marginTop: 20,
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  productContainer: {
    height: "95%",
    width: normalize(90),

    marginLeft: "4%",
    borderRadius: 10,
  },
  products: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  address: {
    color: colors.font,
    fontSize: 13,
    fontWeight: "300",
    textTransform: "uppercase",
    marginLeft: "10%",
  },
  open: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    color: colors.font,
  },
  icon: {
    alignItems: "center",
    flexDirection: "row",
  },
  // linea: {
  //   height: 1,
  //   width: "90%",
  //   backgroundColor: "#95A5A6",
  //   marginHorizontal: "5%",
  // },
});

export default styles;
