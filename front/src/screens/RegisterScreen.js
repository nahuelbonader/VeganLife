import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
//Firebase
import firebase from "../utils/Firebase";
import "firebase/auth";
//API
import API from "../api/api";

//hook
import useInputs from "../hooks/useInputs";

//ImagePicker
import * as ImagePicker from 'expo-image-picker'

//Components
import Logo from "../components/Logo";
import InputData from "../components/InputData";
import AccessButtons from "../components/AccessButtons";

//Style
import styles from "../styles/login-register";

const Register = ({ navigation }) => {
  const [inputs, handleChange] = useInputs();
  const { name, email, password } = inputs;
  // const [avatar, setAvatar] = usetState(null)
  const [errorMessage, setError] = useState("");
  const [img, setImg] = useState (null)

  let handleOpenImage = async () =>{
      let permission = await ImagePicker.requestCameraRollPermissionsAsync();

      if(permission.granted === false){
          return console.log('NO TENES PERMISOS');
      }

      let picker = await ImagePicker.launchImageLibraryAsync()

      if (picker.cancelled===true){
          return console.log('Pickeo cancelado')
      }
      setImg({localUri:picker.uri})
      console.log(picker)
  }

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
        <TouchableOpacity style={estilo.avatarPlaceholder} onPress={()=>handleOpenImage()}>
          <View style={estilo.avatarContainer}>
          {
            img !== null ?
            (
            <Image 
                style={estilo.avatar} 
                source={{uri:(img.localUri !== null) ? img.localUri : 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'}} />
            ) : <Text>+</Text>
        }
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
          question="¿Ya tienes cuenta?"
          onPressInvitation={() => navigation.navigate("Login")}
          invitation="Inicia Sesión"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const estilo = StyleSheet.create({
  avatarContainer:{
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4
  },    
  avatarPlaceholder:{
    width: 136,
    height: 136,
    backgroundColor: '#E1E2E6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  }

})

export default Register;
