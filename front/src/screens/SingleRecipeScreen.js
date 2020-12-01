import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SingleRecipe from "../components/SingleRecipe";
import API from "../api/api";

const Recipe = ({ route }) => {
  const [recipe, setRecipe] = useState({
    image: "",
    ingredients: [],
    title: "",
    instructions: [],
    ownerImage: "",
    ownerName: "",
  });

  useEffect(() => {
    API.get(`/recipes/${route.params.recipeId}`)
      .then(({ data }) => {
        console.log(data);
        setRecipe({
          image: data.image,
          ingredients: data.ingredients,
          title: data.title,
          instructions: data.instructions,
          ownerImage: data.owner.image,
          ownerName: data.owner.name,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    image,
    ingredients,
    title,
    instructions,
    ownerImage,
    ownerName,
  } = recipe;

  return (
    <View>
      <SingleRecipe
        image={image}
        ingredients={ingredients}
        title={title}
        instructions={instructions}
        ownerImage={ownerImage}
        ownerName={ownerName}
      />
    </View>
  );
};

export default Recipe;
