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
  },
  contentContainer: {
    flex: 8,
    width: "100%",
  },
  buttonContainer: {
    flex: 1.3,
    width: "100%",
    justifyContent: "center",
  },

  // TEXTS
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "200",
    textTransform: "uppercase",
  },
  textBtn: {
    color: colors.background,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // BUTTONS
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
});
