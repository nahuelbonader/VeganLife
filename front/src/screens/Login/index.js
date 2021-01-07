import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/users";
import useInputs from "../../hooks/useInputs";

import firebase from "../../utils/Firebase";
import "firebase/auth";

import Google from "./partials/Google";
import Facebook from "./partials/Facebook";

import Logo from "../../commons/Logo";
import Button from "../../commons/Button";
import Invitation from "../../commons/Invitation";
import InputData from "../../commons/InputData"; // CAMBIAR

import { errors, alerts } from "../../utils/errors-alerts";
import styles from "./styles";

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

        <Text style={styles.alert}>{errorMessage}</Text>

        <Button onPressBtn={handleSubmit} textBtn="Iniciar Sesión" />

        <Invitation
          invitation="¿Olvidaste tu contraseña?"
          onPressInvitation={() => navigation.navigate("ForgotPassword")}
        />

        <View style={styles.gmailfbcontainer}>
          <Google />
          <Facebook />
        </View>

        <Invitation
          question="¿No tienes cuenta?"
          onPressInvitation={() => navigation.navigate("Register")}
          invitation="Registrate"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
