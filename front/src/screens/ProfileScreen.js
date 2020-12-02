import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, Button } from "react-native";

//Components
import Profile from "../components/Profile";

//Firebase
import firebase from "../utils/Firebase";
import "firebase/auth";

const ProfileScreen = () => {
  //const datos = useSelector((state) => state.loginUser.loginUser);
  //console.log("DATOS", datos);

  useEffect(() => {
    //axios.get(`http://${IP}:1337/api/users/${route.params.usersId}`)
    //.then(res => console.log (res))
    // firebase.auth().onAuthStateChanged(user=> {
    //     if (user) {
    //         var email = user.email;
    //         var name = user.displayName
    //         console.log(email, name)
    //     }
    // })
  });

  const handleSubmit = () => {
    firebase.auth().signOut();
  };

  const handleUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? console.log(user) : console.log("Usuario no Logueado");
    });
  };
  return <Profile handleSubmit={handleSubmit} handleUser={handleUser} />;
};

export default ProfileScreen;
