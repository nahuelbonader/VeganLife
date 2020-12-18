import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import color from './colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7DBDD",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
   
  },
  banner: {
    height: 100,
    width: "100%",
    height: 200,
    flex: 1.3,
    marginBottom: normalize(30),
  },
  title: {
      
    fontSize: 25,
    fontWeight: "300",
    marginTop: 10,
    textAlign: "center",
    textTransform: "uppercase",
    color: color.darkGreen
  },
  address: {
    fontSize: 15,
    fontWeight: "200",
    marginTop: 10,
    marginBottom: 5,
    paddingRight: 20
  },
  open: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  infoDos: {
    flexDirection: "row",
    marginLeft: 20,
  },
  location: {
    height: 10,
    width: 10,
  },
  hour: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  delivery: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default styles;
