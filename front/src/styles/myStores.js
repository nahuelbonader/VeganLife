import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  viewUser: {
    flex: 0.7,
    width: "85%",
    marginVertical: "4%",
    backgroundColor: colors.containers,
    flexDirection: "row",
    borderRadius: 50,
    alignItems: "center",
  },
  userIcon: {
    marginLeft: "8%",
    marginRight: "4%",
    width: "10%",
    height: "60%",
    borderRadius: 100,
  },

  userName: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },
  createdMessage: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    fontSize: 17,
  },
  viewOptions: {
    flex: 0.5,
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "1.5%",
  },
  viewMarkets: {
    flex: 7,
    marginHorizontal: "5%",
  },
  touch1: {
    color: "green",
    fontSize: 16,
  },
  touchActive: {
    color: colors.darkGreen,
    fontWeight: "bold",
    borderBottomWidth: 3,
    borderBottomColor: "green",
    fontSize: 17,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    width: "45%",
    marginRight: "5%",
    marginTop: "4%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputTwo: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    marginTop: "5%",
  },
  midText: {
    alignSelf: "center",
    marginTop: "3%",
    marginBottom: "1%",
    fontSize: 17,
    color: "#0c7502",
    fontWeight: "bold",
  },
  submit: {
    alignSelf: "center",
    backgroundColor: colors.dartmouthGreen,
    padding: "3%",
    borderRadius: 20,
  },
  textSubmit: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  goBack: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: colors.dartmouthGreen,
    padding: "1%",
    borderRadius: 20,
    marginRight: "70%",
  },
  IconStyle: {
    margin: 5,
    color: "white",
  },
});
