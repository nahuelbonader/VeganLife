import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../styles/colors";
import normalize from "react-native-normalize";

const InputDataRecipe = ({ handleChange, title, text, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={handleChange}
        value={text}
        placeholder={title}
        placeholderTextColor={colors.lines}
        secureTextEntry={secureTextEntry}
        multiline
      />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    width: "100%",
    alignItems: "center",
  },
  input: {
    paddingLeft: normalize(7),
    fontSize: normalize(20),
    borderBottomColor: colors.font,
    borderBottomWidth: 1,
    margin: normalize(15),
    height: "75%",
    width: "85%",
    overflow: "scroll"
  },
});


export default InputDataRecipe;
