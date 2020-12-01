import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  viewStyle: {
    marginVertical: normalize(20),
    height: "25%",
    flexDirection: "row",
  },
  image: {
    borderRadius: normalize(20),
    flex: 1,
  },
});

export default styles;
