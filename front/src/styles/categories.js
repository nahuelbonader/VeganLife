import colors from "./colors";
import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderRadius: 15,
    textAlign: "center",
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 1,
    paddingBottom: normalize(15),
    marginBottom: normalize(15),
  },
  carousel: {
    borderRadius: 5,
    paddingLeft: normalize(10),
  },
  title: {
    marginTop: 5,
    marginLeft: normalize(15),
    marginBottom: normalize(10),
    fontSize: 20,
    color: colors.font,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 15,
    color: colors.font,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "200",
    marginTop: 5,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 130,
  },
});

export default styles;
