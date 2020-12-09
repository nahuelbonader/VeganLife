import React from "react";
import SingleRecipe from "../components/SingleRecipe";
import { useSelector } from "react-redux";

const Recipe = ({ route }) => {
  const { recipes } = useSelector((state) => state.recipesReducer);
  const { user } = useSelector((state) => state.usersReducer);

  [recipeSelected] = recipes.filter((r) => r._id == route.params.recipeId);
  const { image, ingredients, title, instructions, owner } = recipeSelected;

  return (
    <SingleRecipe
      image={image || ""}
      ingredients={ingredients || []}
      title={title || ""}
      instructions={instructions || []}
      ownerImage={owner.image || ""}
      ownerName={owner.name || ""}
      ownerId={owner._id || ""}
    />
  );
};

export default Recipe;
