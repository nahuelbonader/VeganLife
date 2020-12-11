import React, {useEffect, useState} from "react";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/users";
import { registerUser } from "../store/actions/users";
import { View, Alert } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Facebook from 'expo-facebook'

const FacebookLoginComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isUserEqual = (facebookAuthResponse, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
            providerData[i].uid === facebookAuthResponse.userID) {
          // We don't need to re-auth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }


  const onSignIn = (facebookUser) => {
    console.log('facebookUser', facebookUser)
    if (facebookUser) {
      // User is signed-in Facebook.
      var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(facebookUser, firebaseUser)) {
          // Build Firebase credential with the Facebook auth token.
          var credential = firebase.auth.FacebookAuthProvider.credential(
            facebookUser.token);
          // Sign in with the credential from the Facebook user.
          firebase.auth().signInWithCredential(credential)
          .then((res) => {
            if (res.additionalUserInfo.isNewUser === true) {
              console.log('USUARIO NUEVO', res)
              const { email, uid, displayName } = res.user;
              registerUser({
                email,
                name: displayName,
                fuid: uid,
              })
                .then(() => dispatch(fetchUser({ email, fuid: uid })))
                .then(() => navigation.navigate("Home"));
            }else {
              console.log('VIEJO USUARIO')
              const { email, id } = facebookUser.user;
              dispatch(fetchUser({ email, fuid: id })).then(() =>
                navigation.navigate("Home")
              );
            }
          })
          .catch((error) => console.log(error));
        } else {
          // User is already signed-in Firebase with the correct user.
            const { email, id } = googleUser.user;
            dispatch(fetchUser({ email, fuid: id }))
            .then(() =>navigation.navigate("Home"));
          }
      })
    } 
  }
  
  const facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync('975893836270956');
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      console.log('RESULTADO', result)
      if (result.type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${result.token}&fields=id,name,email,picture.height(500)`);
        const data = await response.json()
        console.log('UNA DATA PIOLA', data)
        onSignIn(result)
        Alert.alert('logueado', `hola ${(data.name)}!`);
      } else {
        result.type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  const facebookLogOut = async () => {
    await Facebook.logOutAsync()
    .then((user)=>console.log('DESLOGUEADO', user))
  }

  return (
    <View>
      <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        light
        onPress={facebookLogIn}
      />
        <SocialIcon
        title="DESLOGUEO FB"
        button
        type="linkedin"
        light
        onPress={facebookLogOut}
      />
    </View>
  );
};

export default FacebookLoginComponent;
