import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    height: 460,
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
  rowContainer: {
    height: "10%",
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shortInput: {
    width: "30%",
    borderBottomColor: colors.button,
    borderBottomWidth: 1,
    paddingLeft: "1.5%",
    fontSize: 16,
  },
  input: {
    width: "85%",
    height: "10%",
    borderBottomColor: colors.button,
    borderBottomWidth: 1,
    paddingLeft: "1.5%",
    fontSize: 16,
  },
  dropdown: {
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    width: "85%",
    height: "13%",
    paddingLeft: "1.5%",
    marginBottom: "5%",
    marginTop: "-8%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: "-15%",
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  optionsContainer: {
    marginTop: "5%",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  optionText: {
    fontWeight: "bold",
    marginRight: "-20%",
  },
  textAlert: {
    backgroundColor: colors.mediumGray,
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
  avatarContainer: {
    marginTop: "3%",
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.darkGreen,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 68,
  },
});