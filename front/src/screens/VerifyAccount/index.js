import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/users";

import firebase from "../../utils/Firebase";
import "firebase/auth";

import Logo from "../../commons/Logo";
import Invitation from "../../commons/Invitation";

import styles from "./styles";

const VerifyAccount = ({ navigation }) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.usersReducer.user);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user, "user en feed");
        if (user.emailVerified) {
          console.log("aca");
          const { email, uid } = user;
          dispatch(fetchUser({ email, fuid: uid })).catch((err) =>
            console.log(err)
          );
        }
      }
    });
  }, []);

  console.log("entraste a verifyAccount");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo text='Verifica tu cuenta' />
        <Text>
          Te hamos enviado un correo para que puedas verificar tu cuenta
        </Text>
        <Invitation
          invitation='Intenta de nuevo'
          onPressInvitation={() => navigation.navigate("Register")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerifyAccount;
