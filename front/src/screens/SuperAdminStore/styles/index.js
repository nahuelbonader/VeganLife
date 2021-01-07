import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  firstView: {
    flex: 4.5,
  },
  secondView: {
    flex: 6,
    width: "90%",
    alignSelf: "center",
    paddingBottom: "10%",
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  line: {
    backgroundColor: colors.lightGrey,
    height: 1,
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.font,
    marginVertical: "6%",
  },
  txt: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 19,
  },
  input: {
    flex: 0.5,
    fontSize: 17,
    marginHorizontal: "15%",
    borderBottomWidth: 2,
    borderBottomColor: colors.dartmouthGreen,
    marginTop: "5%",
    marginVertical: "5%",
  },
  button: {
    backgroundColor: colors.button,
    width: "50%",
    height: "15%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: "5%",
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: colors.background,
    fontSize: 16,
    textTransform: "uppercase",
  },

  txt2: {
    fontSize: 20,
    color: colors.font,
    fontWeight: "bold",
    marginVertical: "3%",
    marginLeft: "5%",
    alignSelf: "center",
  },
  txt2Carrot: {
    fontSize: 20,
    color: colors.carrot,
    fontWeight: "bold",
    marginVertical: "3%",
    marginLeft: "5%",
    alignSelf: "center",
  },

  err: {
    color: colors.carrot,
    alignSelf: "center",
  },
  defaultMessage: {
    alignSelf: "center",
    color: "#bfbfbf",
    fontSize: 20,
    marginTop: "35%",
  },
});
