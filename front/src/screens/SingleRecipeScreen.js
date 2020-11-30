import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SingleRecipe from "../components/SingleRecipe";
import axios from "axios";
import IP from "../../env";

const Recipe = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState({
    image: "",
    ingredients: [],
    title: "",
    instructions: [],
    ownerImage: "",
    ownerName: "",
  });

  useEffect(() => {
    axios
      .get(`http://${IP}:1337/api/recipes/${route.params.recipeId}`)
      .then((res) => res.data)
      .then((data) => {
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
