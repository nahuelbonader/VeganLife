import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    width: "100%",
  },
  line: {
    marginTop: 30,
  },
  alert: {
    marginHorizontal: 30,
    alignSelf: "flex-start",
    color: colors.carrot,
  },
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
  },
  avatarPlaceholder: {
    width: 136,
    height: 136,
    backgroundColor: "#E1E2E6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  gmailfbcontainer: {
    marginBottom: "5%",
    flexDirection: "row",
  },
});
