import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
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
    marginTop: normalize(5),
  },
  input: {
    flex: 1,
    paddingLeft: normalize(20),
    paddingRight: normalize(50),
    fontSize: normalize(20),
    borderColor: colors.font,
    borderWidth: 1,
    borderRadius: normalize(50),
    marginVertical: normalize(10),
    width: "85%",
  },
  enterIcon: {
    alignSelf: "flex-end",
    marginRight: "16%",
    position: "absolute",
    borderRadius: normalize(50),
  },
  alert: {
    flex: 0.4,
    color: "red",
  },
  ingredients: {
    flex: 0.5,
    width: "100%",
    paddingHorizontal: normalize(20),
    alignItems: "baseline",
    marginBottom: normalize(5),
  },
  ingredient: {
    backgroundColor: colors.ligthGray,
    paddingRight: normalize(2),
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
    textShadowColor: "green",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  recipeImage: {
    width: 350,
    height: 200,
    marginTop: 15,
  },
  recipeBorder: {
    borderRadius: 10,
  },
});

export default styles;
