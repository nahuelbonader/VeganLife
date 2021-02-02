import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  scrollContainer: {
    width: "100%",
  },
  dataContainer: {
    width: "85%",
    marginBottom: "5%",
  },

  //
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    borderRadius: 25,
    borderColor: colors.niceGray,
    borderWidth: 1,
    marginBottom: "5%",
  },

  // TEXT
  title: {
    fontSize: 18,
    fontWeight: "300",
    color: colors.darkGreen,
    textTransform: "uppercase",
    marginBottom: "5%",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    color: colors.darkGreen,
    textTransform: "uppercase",
    marginBottom: "1%",
  },
  text: {
    fontSize: 17,
    fontWeight: "200",
    marginBottom: "1%",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textList: {
    marginBottom: "1%",
  },
});
