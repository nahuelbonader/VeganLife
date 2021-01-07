import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  inputRow: {
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    width: "50%",
    marginRight: "5%",
  },
  inputColumn: {
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    marginVertical: "5%",
  },
  inputNombre: {
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    width: "70%",
    marginRight: "5%",
  },
  inputPrecio: {
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    width: "20%",
  },
  txt: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  txt2: {
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  row2: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: "10%",
  },
  txt3: {
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: "8%",
  },
  exit: {
    right: "300%",
    borderBottomWidth: 1,
    borderBottomColor: colors.carrot,
  },
  edit: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greenligth,
  },
});
