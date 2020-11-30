import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import {useDispatch, useSelector} from 'react-redux'
import {fetchLogin} from '../actions/users'
import axios from 'axios'
import API from "../api/api";

//Firebase
import firebase from "../utils/Firebase";
import "firebase/auth";

//hook
import useInputs from "../hooks/useInputs";

//Components
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import AccessButtons from "../components/AccessButtons";

//Style
import styles from "../styles/login-register";

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const [inputs, handleChange] = useInputs();
  const { email, password } = inputs;
  const [errorMessage, setError] = useState("");
  

  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(dispatch(fetchLogin(email)))
      .then(() => navigation.navigate("FeedRecetas"))
        // res = {user}
      .catch((err) => {
        if (String(err).includes("password is invalid"))
          setError("La contraseña es invalida.");
        else if (String(err).includes("no user record"))
          setError("El usuario es inexistente.");
        else if (String(err).includes("to many failed login attempts"))
          setError(
            "Demasiados intentos fallidos. Intente nuevamente en unos minutos."
          );
      });
      
      
  };
  useEffect(() => setError(""), [email, password]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text="Iniciar Sesión" />
        <View style={styles.line} />
        <InputData
          title="Correo"
          handleChange={handleChange("email")}
          text={email}
        />
        <InputData
          title="Password"
          handleChange={handleChange("password")}
          text={password}
          secureTextEntry={true}
        />
        <Text style={styles.alert}>{errorMessage}</Text>
        <AccessButtons
          onPressBtn={handleSubmit}
          textBtn="Iniciar Sesión"
          question="¿No tienes cuenta?"
          onPressInvitation={() => navigation.navigate("Register")}
          invitation="Registrate"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

// firebase.auth().onAuthStateChanged(user => {
//     user ? navigation.navigate('Prueba') : console.log('Usuario no Logueado')
// })
