import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 50,
    fontSize: 20,
    borderColor: colors.font,
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: 10,
    width: "92%",
  },
  enterIcon: {
    alignSelf: "flex-end",
    marginRight: "16%",
    position: "absolute",
    borderRadius: 50,
  },
  alert: {
    flex: 0.4,
    color: "red",
  },
  ingredients: {
    flex: 0.5,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "baseline",
    marginBottom: 5,
  },
  ingredient: {
    backgroundColor: colors.ligthGray,
    paddingRight: 2,
    borderStartColor: colors.font,
    borderTopColor: colors.font,
    borderBottomColor: colors.font,
    borderEndColor: colors.font,
  },
  recipes: {
    alignItems: "center",
    flex: 8,
    width: "100%",
  },
  recipeText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 15,
    padding: 60,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  recipeImage: {
    width: 375,
    height: 200,
    marginTop: 15,
  },
  recipeBorder: {
    borderRadius: 15,
  },
});
