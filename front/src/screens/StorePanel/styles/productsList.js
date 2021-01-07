import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  itemContainer: {
    backgroundColor: colors.containers,
    alignSelf: "center",
    marginVertical: "2%",
    flexDirection: "row",
    width: "90%",
    height: 100,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.ligthGray,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: "5%",
  },

  image: {
    width: "25%",
    height: "80%",
    borderRadius: 20,
    marginRight: "5%",
  },
  textContentView: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  txt: {
    color: "#4d4d4d",
  },
  iconsContainer: {
    height: "100%",
    justifyContent: "space-around",
  },
  editIcon: {
    color: colors.darkGreen,
    backgroundColor: colors.background,
    borderRadius: 20,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  deleteIcon: {
    color: colors.carrot,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
