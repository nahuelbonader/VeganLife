import React from "react";
import { useDispatch } from "react-redux";
import * as Google from "expo-google-app-auth";
// import * as Google from "expo-google-sign-in";

import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { fetchUser, registerUser } from "../../../store/actions/users";
import { View } from "react-native";
import { SocialIcon } from "react-native-elements";

const GoogleLoginComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then((res) => {
              if (res.additionalUserInfo.isNewUser === true) {
                const { email, uid, displayName, photoURL } = res.user;
                registerUser({
                  email,
                  name: displayName,
                  fuid: uid,
                  image: photoURL,
                })
                  .then(() => dispatch(fetchUser({ email, fuid: uid })))
                  .then(() => navigation.navigate("Home"));
              } else {
                const { email, id } = googleUser.user;
                dispatch(fetchUser({ email, fuid: id })).then(() =>
                  navigation.navigate("Home")
                );
              }
            })
            .catch((error) => console.log(error));
        } else {
          const { email, id } = googleUser.user;
          dispatch(fetchUser({ email, fuid: id })).then(() =>
            navigation.navigate("Home")
          );
        }
      });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //behavior: "web",
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
      <SocialIcon type="google" onPress={signInWithGoogleAsync} />
    </View>
  );
};

export default GoogleLoginComponent;
