import React from "react";
import { useSelector } from "react-redux";
import Profile from "../components/Profile-VC";

const ProfileScreen = ({ route }) => {
  const userId = route.params.userId;
  const { recipes } = useSelector((state) => state.recipesReducer);
  const { users } = useSelector((state) => state.usersReducer);
  const [user] = users.filter((u) => u._id == userId);
  const ownRecipes = recipes.filter((r) => r.owner._id == userId);

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
