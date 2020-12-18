import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  products: {
    height: 100,
    width: 100,
    marginBottom: 20,
    marginTop: 7,
    marginLeft: 20,
    marginRight: 210,
    borderRadius: 50,
  },
  categoryName: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "200",
  },
});

export default styles;
