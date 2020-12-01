import React from "react";
import { View, TextInput } from "react-native";
import styles from "../styles/inputData";
import colors from "../styles/colors";

const InputData = ({ handleChange, title, text, secureTextEntry }) => {
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

export default InputData;
