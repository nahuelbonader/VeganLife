import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  portada: {
    width: "100%",
    flex: 1.3,
    marginBottom: 30,
  },
  profileContainer: {
    position: "absolute",
    alignSelf: "center",
    marginTop: "18%",
    alignItems: "center",
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: colors.mediumGray,
  },
  name: {
    fontSize: 18,
    fontWeight: "300",
    textTransform: "uppercase",
    marginTop: 10,
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
    paddingTop: "5%",
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
    fontWeight: "300",
    marginTop: 4,
  },

  recipesContainer: {
    flex: 2,
  },
  recipesTitle: {
    fontSize: 18,
    color: "green",
    textTransform: "uppercase",
    fontWeight: "200",
    marginLeft: 10,
    marginBottom: 7,
  },
  recipeText: {
    opacity: 0,
  },
  recipeImage: {
    width: 200,
    height: 160,
    marginHorizontal: 5,
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
    fontSize: 15,
    fontWeight: "200",
    textTransform: "uppercase",
  },
});
