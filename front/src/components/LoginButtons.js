import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/loginButtons";

const LoginButtons = ({
  question,
  onPressInvitation,
  invitation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{question}</Text>
        <TouchableOpacity onPress={onPressInvitation} style={styles.invitation}>
          <Text style={styles.invitation}>{invitation}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginButtons;