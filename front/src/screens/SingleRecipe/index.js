import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  addRecipeToFavs,
  deleteRecipeFromFavs,
} from "../../store/actions/favourites";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { recipeImg, userIcon } from "../../utils/constants";
import styles from "./styles";

const Gradient = (
  <LinearGradient
    start={{ x: 0.0, y: 0.0 }}
    end={{ x: 0.0, y: 1.0 }}
    locations={[0.1, 1.0]}
    colors={["#ffffff70", "#fffffff7"]}
    useViewFrame={false}
    style={styles.gradient}
  />
);

const Ingredient = ({ quantity, ingredient }) => (
  <Text style={styles.textTwo}>
    {quantity} {ingredient}
  </Text>
);

const Step = ({ item, index }) => (
  <Text style={styles.textTwo}>
    {index + 1}. {item}
  </Text>
);

export default ({ route }) => {
  const dispatch = useDispatch();
  const recipeId = route.params.recipeId;
  const { user } = useSelector((state) => state.usersReducer);
  const { recipes } = useSelector((state) => state.recipesReducer);
  const recipesFavs = useSelector((state) => state.favouritesReducer.recipes);
  const [recipeSelected] = recipes.filter((r) => r._id == recipeId);
  const { image, ingredients, title, instructions, owner } = recipeSelected;
  const [isFav, setIsFav] = useState(false);
  const navigation = useNavigation();
  const [showSteps, setShowSteps] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

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
    <ScrollView style={{ backgroundColor: "#F1F4FB", width: "100%" }}>
      <View></View>
      <View style={styles.viewStyle}>
        <Image
          style={styles.image}
          source={{ uri: image !== "" ? image : recipeImg }}
        />
        <TouchableOpacity style={styles.favButton} onPress={() => handleFav()}>
          <Icon
            style={styles.favIcon}
            name={isFav ? "cards-heart" : "heart-outline"}
            size={30}
            color="#35b056"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewThree}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.viewProfile}
          onPress={() => navigation.navigate("Profile", { userId: owner._id })}
        >
          <Image
            style={styles.profilePic}
            source={{ uri: owner.image !== "" ? owner.image : userIcon }}
          />
          <Text style={styles.name}>by {owner.name}</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Ingredientes</Text>
        <TouchableOpacity onPress={() => setShowIngredients(!showIngredients)}>
          {showIngredients ? (
            <>
              {ingredients.map((e, index) => (
                <Ingredient
                  quantity={e.quantity}
                  ingredient={e.ingredient}
                  key={index}
                />
              ))}
            </>
          ) : (
            <>
              {ingredients.map((e, index) =>
                index < 5 ? (
                  <Ingredient
                    quantity={e.quantity}
                    ingredient={e.ingredient}
                    key={index}
                  />
                ) : null
              )}
              {ingredients.length > 5 ? Gradient : null}
            </>
          )}
        </TouchableOpacity>

        <Text style={styles.text}>Paso a Paso</Text>
        <TouchableOpacity onPress={() => setShowSteps(!showSteps)}>
          {showSteps ? (
            <>
              {instructions.map((step, index) => (
                <Step item={step} index={index} key={index} />
              ))}
            </>
          ) : (
            <>
              {instructions.map((step, index) =>
                index < 5 ? (
                  <Step item={step} index={index} key={index} />
                ) : null
              )}
              {instructions.length > 5 ? Gradient : null}
            </>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
