import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    borderBottomColor: colors.mediumGray,
    borderBottomWidth: 1,
    paddingBottom: normalize(15),
    marginBottom: normalize(15),
  },
  title: {
    marginLeft: normalize(15),
    marginBottom: normalize(15),
    fontSize: 20,
    color: colors.font,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "300",
    textTransform: "uppercase",
    marginTop: 10,
  },
  image: {
    alignSelf: "center",
    width: "95%",
    height: 180,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 18,
  },
});

export default styles;
