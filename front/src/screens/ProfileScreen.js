import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUserProfile } from "../store/actions/users";
import Profile from "../components/Profile-VC";

const ProfileScreen = ({ route }) => {
  const userId = route.params.userId;
  const { recipes } = useSelector((state) => state.recipesReducer);
  const favsRecipes = useSelector((state) => state.favouritesReducer);
  const ownRecipes = recipes.filter((r) => r.owner._id == userId);
  const [user, setUser] = useState({
    name: "",
    image: "",
    favsRecipes: [],
  });

  useEffect(() => {
    fetchUserProfile(userId).then((user) => setUser(user));
  }, [favsRecipes, userId]);

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
