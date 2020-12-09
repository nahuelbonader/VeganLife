import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addRecipeToFavs,
  deleteRecipeFromFavs,
} from "../store/actions/favourites";
import SingleRecipe from "../components/SingleRecipe";

const Recipe = ({ route }) => {
  const dispatch = useDispatch();
  const recipeId = route.params.recipeId;
  const { user } = useSelector((state) => state.usersReducer);
  const { recipes } = useSelector((state) => state.recipesReducer);
  const recipesFavs = useSelector((state) => state.favouritesReducer.recipes);
  const [recipeSelected] = recipes.filter((r) => r._id == recipeId);
  const { image, ingredients, title, instructions, owner } = recipeSelected;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    recipesFavs.forEach((r) => {
      if (r._id == recipeId) setIsFav(true);
    });
  }, [recipesFavs]);

  const handleFav = () => {
    isFav
      ? dispatch(deleteRecipeFromFavs(user._id, recipeId))
      : dispatch(addRecipeToFavs(user._id, recipeSelected));
    setIsFav(!isFav);
  };

  return (
    <SingleRecipe
      image={image || ""}
      ingredients={ingredients || []}
      title={title || ""}
      instructions={instructions || []}
      ownerImage={owner.image || ""}
      ownerName={owner.name || ""}
      ownerId={owner._id || ""}
      handleFav={handleFav}
      isFav={isFav}
    />
  );
};

export default Recipe;
