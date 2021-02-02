import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.ligthGray,
    borderRadius: 20,
  },
  contentContainer: {
    flex: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1.3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  // General
  titleText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  goBackButton: {
    position: "absolute",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  button: {
    height: "60%",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dartmouthGreen,
    borderRadius: 30,
  },
  textSubmit: {
    color: colors.background,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // First Page
  containerInputsShorts: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "2.5%",
    width: "90%",
  },
  inputShort: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    width: "48%",
  },
  inputDescription: {
    fontSize: 16,
    height: "17%",
    borderBottomWidth: 1,
    borderBottomColor: colors.dartmouthGreen,
    marginBottom: "5%",
    width: "90%",
  },
  avatarContainer: {
    marginTop: "7%",
    marginBottom: "5%",
    flex: 1,
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
    alignItems: "center",
    width: "100%",
  },
  avatarTouchable: {
    width: "43%",
    height: "77%",
    backgroundColor: colors.background,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.mediumGray,
    borderWidth: 2,
    marginBottom: "3%",
  },
  avatar: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  text: {
    color: colors.niceGray,
    fontSize: 15,
  },

  // Second Page
  googleInputContainer: {
    flex: 7,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: colors.ligthGray,
  },
  deliveryContainer: {
    flex: 3,
    width: "90%",
    marginTop: "3%",
    alignItems: "center",
    paddingVertical: "10%",
    marginBottom: "10%",
    borderBottomWidth: 1,
    borderBottomColor: colors.ligthGray,
  },
  questionText: {
    flex: 1,
    alignSelf: "center",
    marginBottom: "2%",
    fontSize: 17,
    color: colors.font,
    fontWeight: "bold",
  },
  deliveryOptions: {
    flex: 1,
    width: "50%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  optionText: {
    fontWeight: "bold",
    marginRight: "-20%",
  },

  // Third Page
  containerInputsHours: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
