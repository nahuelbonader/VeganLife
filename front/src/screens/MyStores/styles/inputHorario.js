import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: "2%",
    paddingVertical: "2%",
    alignSelf: "center",
    backgroundColor: colors.ligthGray,
    borderRadius: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: "3%",
  },
  optionsContainer: {
    width: "50%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "1%",
  },
  optionText: {
    fontWeight: "bold",
    marginRight: "-20%",
  },

  // Open true
  openContainer: {
    flexDirection: "row",
    marginTop: "4%",
  },
  textContainer: {
    width: "21%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "6%",
    paddingLeft: "5%",
  },
  text: {
    fontWeight: "bold",
  },
  hoursContainer: {
    width: "40%",
    alignItems: "center",
  },
  descriptionText: {
    fontWeight: "bold",
    color: colors.font,
  },
  timeContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    borderBottomWidth: 0.5,
  },
});
