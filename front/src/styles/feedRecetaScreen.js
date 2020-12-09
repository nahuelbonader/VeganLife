import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipesTitle: {
    marginLeft: normalize(15),
    marginBottom: normalize(10),
    fontSize: 20,
    color: colors.font,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default styles;
