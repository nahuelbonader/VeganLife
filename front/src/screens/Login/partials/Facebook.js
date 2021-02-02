import React from "react";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchUser, registerUser } from "../../../store/actions/users";
import { View, Alert } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";

const FacebookLoginComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isUserEqual = (facebookAuthResponse, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
          providerData[i].uid === facebookAuthResponse.userID
        ) {
          // We don't need to re-auth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (facebookUser) => {
    if (facebookUser) {
      // User is signed-in Facebook.
      var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(facebookUser, firebaseUser)) {
          // Build Firebase credential with the Facebook auth token.
          var credential = firebase.auth.FacebookAuthProvider.credential(
            facebookUser.token
          );
          // Sign in with the credential from the Facebook user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then((res) => {
              if (res.additionalUserInfo.isNewUser === true) {
                const { email, uid, displayName } = res.user;
                registerUser({
                  email,
                  name: displayName,
                  fuid: uid,
                })
                  .then(() => dispatch(fetchUser({ email, fuid: uid })))
                  .then(() => navigation.navigate("Home"));
              } else {
                const { email, id } = res.user;
                dispatch(fetchUser({ email, fuid: id })).then(() =>
                  navigation.navigate("Home")
                );
              }
            })
            .catch((error) => console.log(error));
        } else {
          // User is already signed-in Firebase with the correct user.
          const { email, id } = facebookUser.user;
          dispatch(fetchUser({ email, fuid: id })).then(() =>
            navigation.navigate("Home")
          );
        }
      });
    }
  };

  const facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync("975893836270956");
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (result.type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${result.token}&fields=id,name,email,picture.height(500)`
        );
        const data = await response.json();
        onSignIn(result);
        Alert.alert("logueado", `hola ${data.name}!`);
      } else {
        result.type === "cancel";
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View>
      <SocialIcon type="facebook" onPress={facebookLogIn} />
    </View>
  );
};

export default FacebookLoginComponent;
