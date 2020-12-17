import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from "../utils/Firebase";
import "firebase/auth";
import "firebase/storage";
import { registerUser } from "../store/actions/users";
import useInputs from "../hooks/useInputs";
import * as ImagePicker from "expo-image-picker";
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import AccessButtons from "../components/AccessButtons";
import LoginButtons from '../components/LoginButtons'
import { errors, alerts } from "../utils/errors-alerts";
import { userIcon } from "../utils/constants";
import styles from "../styles/login-register";

const Register = ({ navigation }) => {
  const [{ name, email, password }, handleChange] = useInputs();
  const [errorMessage, setError] = useState("");
  const [image, setImage] = useState("");

  const handleOpenImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const picker = await ImagePicker.launchImageLibraryAsync();
    if (!permission.granted) return console.log("NO TENES PERMISOS");
    if (picker.cancelled) return console.log("Pickeo cancelado");
    setImage(picker.uri);
    uploadImage(picker.uri);
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .child("images/" + uri);
    await ref.put(blob);
    return await ref
      .getDownloadURL()
      .then((downloadUrl) => setImage(downloadUrl))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async () => {
    if (!name.length) return setError(alerts.name);
    if (!email.length) return setError(alerts.emailField);
    if (password.length < 8) return setError(alerts.password);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const fuid = res.user.uid;
        return registerUser({ name, email, fuid, image });
      })
      .then(() => navigation.navigate("Login"))
      .catch((err) => {
        const error = String(err);
        if (error.includes(errors.format)) setError(alerts.format);
        else if (error.includes(errors.email)) setError(alerts.email);
        else console.log(err);
      });
  };

  useEffect(() => setError(""), [email, password, name]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text="Crear cuenta" />
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={() => handleOpenImage()}
        >
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{ uri: image ? image : userIcon }}
            />
          </View>
        </TouchableOpacity>
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
          textBtn="Registrarse"
        />
        <LoginButtons
          question="¿Ya tienes cuenta?"
          invitation="Inicia Sesión"
          onPressInvitation={() => navigation.navigate("Login")}
        />

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
