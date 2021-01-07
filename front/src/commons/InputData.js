import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default ({ handleChange, title, text, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoCompleteType="username"
        style={styles.input}
        onChangeText={handleChange}
        value={text}
        placeholder={title}
        placeholderTextColor={colors.lines}
        secureTextEntry={secureTextEntry}
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
    paddingLeft: 7,
    fontSize: 20,
    borderBottomColor: colors.font,
    borderBottomWidth: 1,
    margin: 15,
    height: "75%",
    width: "85%",
  },
});
