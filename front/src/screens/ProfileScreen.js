import React, { useEffect, useState } from "react";
import API from "../api/api";
import Profile from "../components/Profile";

const ProfileScreen = ({ route }) => {
  const [user, setUser] = useState({
    name: "",
    image: "",
    favsRecipes: [],
  });
  useEffect(() => {
    API.get(`/users/${route.params.userId}`).then(({ data }) => setUser(data));
  }, []);

  return (
    <Profile
      name={user.name}
      image={user.image}
      favsRecipes={user.favsRecipes}
    />
  );
};

export default ProfileScreen;

//Firebase
// import firebase from "../utils/Firebase";
// import "firebase/auth";

// const handleSubmit = () => {
//   firebase.auth().signOut();
// };

// const handleUser = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     user ? console.log(user) : console.log("Usuario no Logueado");
//   });
// };
