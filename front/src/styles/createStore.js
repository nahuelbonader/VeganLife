import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  // First Page
  containerInputs: {
    flex: 4,
    justifyContent: "center",
    marginTop: "5%",
  },
  containerInputsShorts: {
    height: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  inputShort: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    width: "48%",
  },
  inputLarge: {
    fontSize: 16,
    height: "12%",
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    marginTop: "5%",
  },
  inputDescription: {
    fontSize: 16,
    height: "20%",
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    marginTop: "10%",
  },
  separetorSpace: {
    flex: 0.5,
  },
  deliveryContainer: {
    flex: 2,
    width: "100%",
    marginTop: "20%",

    alignItems: "center",
  },
  questionText: {
    flex: 0.2,
    alignSelf: "center",
    marginBottom: "2%",
    fontSize: 17,
    color: colors.font,
    fontWeight: "bold",
  },
  deliveryOptions: {
    flex: 0.5,
    width: "50%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "8%",
  },
  optionText: {
    fontWeight: "bold",
    marginRight: "-20%",
  },
  next: {
    flex: 0.7,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dartmouthGreen,
    borderRadius: 25,
    marginBottom: "10%",
  },
  textSubmit: {
    color: colors.background,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // Second Page
  containerButtons: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  goBack: {
    flex: 1,
    backgroundColor: colors.dartmouthGreen,
    padding: "1%",
    borderRadius: 20,
  },
  IconStyle: {
    margin: 5,
    color: "white",
  },
  titleText: {
    flex: 7,
    fontSize: 20,
    color: colors.font,
    fontWeight: "bold",
    marginLeft: "20%",
  },
  containerInputsHours: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
  submitContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
    marginBottom: "10%",
  },
  submit: {
    flex: 0.7,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dartmouthGreen,
    borderRadius: 25,
  },
});
