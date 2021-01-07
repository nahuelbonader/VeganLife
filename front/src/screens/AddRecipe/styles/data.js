import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerDropdown: {
    flex: 1.3,
    paddingLeft: "2%",
    justifyContent: "center",
    width: "85%",
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    flex: 9,
    width: "90%",
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTouchable: {
    flex: 0.6,
    width: "100%",
    justifyContent: "center",
    marginBottom: "10%",
  },

  // INPUTS
  input: {
    height: 40,
    width: "85%",
    fontSize: 20,
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    paddingLeft: "2%",
    marginBottom: "3%",
  },

  // IMAGE
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    borderColor: colors.niceGray,
    borderWidth: 1,
  },

  // TEXT
  text: {
    color: "black",
    fontWeight: "200",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
