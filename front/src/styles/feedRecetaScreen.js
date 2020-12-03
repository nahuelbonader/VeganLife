import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: "green",
    marginLeft: normalize(20),
    marginTop: normalize(2),
    fontSize: normalize(20),
    fontWeight: "300",
    textTransform: "uppercase",
  },
});

export default styles