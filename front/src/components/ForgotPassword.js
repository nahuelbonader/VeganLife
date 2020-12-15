import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import firebase from "../utils/Firebase";
import "firebase/auth";
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import useInputs from "../hooks/useInputs";
import AccessButtons from "../components/AccessButtons";
import { errors, alerts } from "../utils/errors-alerts";
import styles from "../styles/login-register";

const ForgotPassword = ({ navigation }) => {
  const [{email}, handleChange] = useInputs();
  const [errorMessage, setError] = useState("")


  const handleSubmit  = async () => {
    await firebase.auth().sendPasswordResetEmail(email)
    .then((res)=>console.log('resultado', res))
    .then(()=>Alert.alert('Verifica tu correo electronico para reestablecer la contraseña'))
    .then(()=>navigation.navigate('Login'))
    .catch((err)=>console.log(err))
  }

  useEffect(() => setError(""), [email]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text="Recupera tu contraseña" />
        <View style={styles.line} />
        <InputData
          title="Ingresa tu correo"
          handleChange={handleChange("email")}
          text={email}
        />
        <Text style={styles.alert}>{errorMessage}</Text>
        <AccessButtons
          onPressBtn={handleSubmit}
          textBtn="Recuperar"
          onPressInvitation={()=> navigation.navigate('Login')}
          invitation="Volver"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;