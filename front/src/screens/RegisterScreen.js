import React from "react";
import { Text, View } from "react-native";
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

  const handleSubmit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    await API.post("/users", { email })
      .then(() => navigation.navigate("Login"))
      .catch(() => {
        console.log("ERROR DE AUTENTICACION");
      });
  };

  return (
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
      <Text style={styles.alert}>Acá se verían los errores</Text>
      <AccessButtons
        onPressBtn={handleSubmit}
        textBtn="Crear cuenta"
        question="¿Ya tienes cuenta?"
        onPressInvitation={() => navigation.navigate("Login")}
        invitation="Inicia Sesión"
      />
    </View>
  );
};

export default Register;
