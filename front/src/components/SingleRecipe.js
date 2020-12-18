import React, { useState } from "react";
import { View, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles/singleRecipe";
import { LinearGradient } from "expo-linear-gradient";
import { recipeImg, userIcon } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

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

const SingleRecipe = ({
  image,
  ingredients,
  title,
  instructions,
  ownerImage,
  ownerName,
  ownerId,
  isFav,
  handleFav,
}) => {
  const navigation = useNavigation();
  const [showSteps, setShowSteps] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

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
          onPress={() => navigation.navigate("Profile", { userId: ownerId })}
        >
          <Image
            style={styles.profilePic}
            source={{ uri: ownerImage !== "" ? ownerImage : userIcon }}
          />
          <Text style={styles.name}>by {ownerName}</Text>
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

export default SingleRecipe;
