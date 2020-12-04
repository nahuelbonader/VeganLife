import React from "react";
import { View } from "react-native";
import firebase from "firebase";
import * as Google from "expo-google-app-auth";
import API from "../api/api";
import { SocialIcon } from "react-native-elements";

const GoogleLoginComponent = ({ navigation }) => {
  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    //console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(({ user }) => {
              if (res.additionalUserInfo.isNewUser) {
                const { uid, displayName, photoURL, email } = user;
                return API.post("/users", {
                  email,
                  name: displayName,
                  fuid: uid,
                  image: photoURL,
                });
              }
            })

            .then(() => navigation.navigate("Home"))

            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: "web",
        androidClientId:
          "1027453246815-di3mmbc5id3crrum0vapj7055u0tpqpj.apps.googleusercontent.com",
        iosClientId:
          "1027453246815-f79b0s92j6umd56sh7493ed31mhnolbo.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  return (
    <View>
      <SocialIcon
        title="Sign In With Google"
        button
        type="google"
        light
        onPress={signInWithGoogleAsync}
      />
    </View>
  );
};

export default GoogleLoginComponent;
