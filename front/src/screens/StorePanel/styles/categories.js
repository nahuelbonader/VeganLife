import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  containerCategorie: {
    alignSelf: "center",
    width: "95%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "3%",
  },
  textCategorie: {
    width: "100%",
    fontSize: 17,
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "6%",
    backgroundColor: colors.darkGreen,
    paddingHorizontal: "15%",
    paddingVertical: "1%",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: colors.background,
  },
  // Modal
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
  modalView: {
    width: "80%",
    height: 120,
    backgroundColor: colors.mediumGray,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  input: {
    width: "90%",
    borderBottomColor: colors.button,
    borderBottomWidth: 1,
    paddingLeft: "1.5%",
    fontSize: 16,
  },
  textAlert: {
    backgroundColor: colors.darkGray,
    color: colors.carrot,
    marginTop: "5%",
    paddingHorizontal: "3%",
    paddingVertical: "1%",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  btnSubmit: {
    marginTop: "7%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    paddingHorizontal: "10%",
    paddingVertical: "1%",
    borderRadius: 30,
  },
  textSubmit: {
    color: colors.background,
  },
});
