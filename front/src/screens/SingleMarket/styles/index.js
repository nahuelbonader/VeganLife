import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },

  containerData: {
    flex: 6,
    backgroundColor: colors.mediumGray,
    marginTop: "-17%",
    width: "95%",
    borderRadius: 30,
  },

  banner: {
    width: "100%",
    flex: 1.5,
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    marginTop: "5%",
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.darkGreen,
  },
  address: {
    fontSize: 15,
    fontWeight: "200",
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 20,
  },
  open: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  image: {
    height: "20%",
    width: "35%",
    borderRadius: 100,
    marginTop: "-15%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.background,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: "-3%",
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 0.5,
    borderRadius: 20,
    paddingBottom: "5%",
  },
  infoDos: {
    flexDirection: "row",
    marginLeft: 10,
  },
  location: {
    height: 10,
    width: 10,
  },
  hour: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  delivery: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default styles;
