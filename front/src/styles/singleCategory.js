import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    marginVertical: normalize(10),
  },
  image: {
    borderRadius: normalize(20),
    flex: 1,
  },
  categories: {
    color: "green",
    marginTop: normalize(2),
    fontSize: normalize(25),
    fontWeight: "300",
    textTransform: "uppercase",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default styles;
