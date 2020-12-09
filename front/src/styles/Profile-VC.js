import { StyleSheet } from "react-native";
import colors from "./colors";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  portada: {
    width: "100%",
    flex: 1.3,
    marginBottom: normalize(30),
  },
  subContainer: {
    position: "absolute",
    alignSelf: "center",
    marginTop: normalize(85),
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: normalize(70),
    borderWidth: 3,
    borderColor: colors.niceGray,
  },
  name: {
    position: "absolute",
    marginTop: normalize(135),
    marginLeft: normalize(10),
    fontSize: normalize(18),
    fontWeight: "bold",
  },
  statsContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8%",
    marginBottom: "5%",
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    borderRadius: 20,
  },
  stats: {
    alignItems: "center",
    flex: 1,
  },
  statAmount: {
    color: "#4F566D",
    fontSize: 18,
    fontWeight: "300",
  },
  statTitle: {
    color: "#C3C5CD",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 4,
  },

  recipesContainer: {
    flex: 2,
    marginTop: "4%",
  },
  recipesTitle: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginLeft: normalize(10),
    marginBottom: normalize(7),
  },
  recipeText: {
    opacity: 0,
  },
  recipeImage: {
    width: 200,
    height: 150,
    marginHorizontal: normalize(5),
  },
  recipeBorder: {
    borderRadius: 20,
  },
  recipesCover: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recipesCoverTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
