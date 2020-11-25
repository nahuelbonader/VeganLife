import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";

const HomeScreen = () => {
  const login = () =>
    axios
      .get("http://192.168.0.5:1337/api/users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="register" onPress={() => login()} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
