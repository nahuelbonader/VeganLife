import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/accessButtons";

const AccessButtons = ({
  onPressBtn,
  textBtn,
  question,
  onPressInvitation,
  invitation,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBtn} style={styles.btn}>
        <Text style={styles.btn_text}>{textBtn}</Text>
      </TouchableOpacity>
      <View style={styles.text_container}>
        <Text style={styles.text}>{question}</Text>
        <TouchableOpacity onPress={onPressInvitation} style={styles.invitation}>
          <Text style={styles.invitation}>{invitation}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccessButtons;
