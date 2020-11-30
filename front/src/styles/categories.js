import colors from "./colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    //flex: 0.85,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 15,
    elevation: 10,
    backgroundColor: colors.containers,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    borderRadius: 18,
  },
  carousel: {
    borderRadius: 5,
  },
  textContainer: {
    fontSize: 20,
    color: colors.font,
    textAlign: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: colors.font,
    fontSize: 18,
    marginLeft: 20,
    textAlign: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 100,
  },
});

export default styles;