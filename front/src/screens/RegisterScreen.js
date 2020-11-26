import React, { useState, useEffect } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
//Firebase
import firebase from "../utils/Firebase";
import "firebase/auth";
//API
import API from "../api/api";

//hook
import useInputs from "../hooks/useInputs";

//Components
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import AccessButtons from "../components/AccessButtons";

//Style
import styles from "../styles/login-register";

const Register = ({ navigation }) => {
  const [inputs, handleChange] = useInputs();
  const { name, email, password } = inputs;
  const [errorMessage, setError] = useState("");

  const handleSubmit = async () => {
    if (name.length > 0) {
      if (email.length > 0) {
        if (password.length > 6) {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => API.post("/users", { name, email }))
            .then(() => navigation.navigate("Login"))
            .catch((err) => {
              if (String(err).includes("badly formatted"))
                setError("El email es inválido");
              else if (String(err).includes("another account"))
                setError("El email ya se encuentra registrado");
              else console.log(err);
            });
        } else setError("La contraseña debe tener al menos 7 caracteres");
      } else setError("Por favor, ingrese su email");
    } else setError("Por favor, ingrese su nombre");
  };

  useEffect(() => setError(""), [email, password, name]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text="Crear cuenta" />
        <InputData
          title="Nombre"
          handleChange={handleChange("name")}
          text={name}
        />
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
          textBtn="Crear cuenta"
          question="¿Ya tienes cuenta?"
          onPressInvitation={() => navigation.navigate("Login")}
          invitation="Inicia Sesión"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
