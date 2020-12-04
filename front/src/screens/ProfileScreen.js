import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";
import Profile from "../components/Profile-VC";

const ProfileScreen = ({ route }) => {
  const [user, setUser] = useState({
    name: "",
    image: "",
    favsRecipes: [],
  });

  const userId = route.params.userId;
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const ownRecipes = recipes.filter((r) => r.owner._id == userId);

  useEffect(() => {
    API.get(`/users/${userId}`).then(({ data }) => setUser(data));
  }, []);

  return (
    <Profile
      name={user.name}
      image={user.image}
      favsRecipes={user.favsRecipes}
      ownRecipes={ownRecipes}
    />
  );
};

export default ProfileScreen;
