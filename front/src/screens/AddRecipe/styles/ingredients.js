import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputsContainer: {
    flex: 1.5,
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.niceGray,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: "3%",
  },
  listContainer: {
    flex: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientContainer: {
    height: 30,
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: "1%",
    marginTop: "2%",
    borderBottomColor: colors.niceGray,
    borderBottomWidth: 1,
  },

  // INPUTS
  input: {
    width: "35%",
    fontSize: 18,
    borderBottomColor: colors.greenligth,
    borderBottomWidth: 1,
    marginRight: "5%",
    paddingLeft: "1%",
  },

  // TEXT
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "300",
    color: colors.darkGreen,
    textTransform: "uppercase",
    width: "90%",
    alignContent: "center",
  },
  textIngredient: {
    fontSize: 16,
    color: colors.darkGray,
  },
});
