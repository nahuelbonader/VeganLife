import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/users";
import firebase from "../utils/Firebase";
import "firebase/auth";
import useInputs from "../hooks/useInputs";
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import GoogleLoginComponent from "../components/GoogleLoginComponent";
import AccessButtons from "../components/AccessButtons";
import { errors, alerts } from "../utils/errors-alerts";
import styles from "../styles/login-register";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [inputs, handleChange] = useInputs();
  const { email, password } = inputs;
  const [errorMessage, setError] = useState("");

  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => dispatch(fetchUser({ email, fuid: res.user.uid })))
      .then(() => navigation.navigate("Home"))
      .catch((err) => {
        const error = String(err);
        const errorCredential = errors.credentials.filter((e) =>
          error.includes(e)
        );
        if (errorCredential.length) setError(alerts.credentials);
        else if (error.includes(errors.attempts)) setError(alerts.attempts);
        else console.log(err);
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

        <GoogleLoginComponent />

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
