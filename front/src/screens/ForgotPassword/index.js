import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import firebase from "../../utils/Firebase";
import Logo from "../../commons/Logo";
import InputData from "../../commons/InputData";
import useInputs from "../../hooks/useInputs";
import Button from "../../commons/Button";
import styles from "../Login/styles";

const ForgotPassword = ({ navigation }) => {
  const [{ email }, handleChange] = useInputs();
  const [errorMessage, setError] = useState("");

  const handleSubmit = async () => {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => console.log("resultado", res))
      .then(() =>
        Alert.alert(
          "Verifica tu correo electronico para reestablecer la contraseña"
        )
      )
      .then(() => navigation.navigate("Login"))
      .catch((err) => console.log(err));
  };

  useEffect(() => setError(""), [email]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text="Recupera tu contraseña" />
        <View style={{ marginTop: 110 }} />
        <InputData
          title="Ingresa tu correo"
          handleChange={handleChange("email")}
          text={email}
        />
        <Text style={styles.alert}>{errorMessage}</Text>
        <View style={{ marginTop: 110 }} />

        <Button onPressBtn={handleSubmit} textBtn="Recuperar" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
