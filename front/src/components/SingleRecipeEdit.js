import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { userIcon, recipeImg } from "../utils/constants";
import styles from "../styles/singleRecipe";

const Ingredient = ({ quantity, ingredient }) => (
  <Text style={styles.textTwo}>
    {quantity} {ingredient}
  </Text>
);

const renderIngredient = ({ item }) => (
  <Ingredient quantity={item.quantity} ingredient={item.ingredient} />
);

const Step = ({ item, index }) => (
  <Text style={styles.textTwo}>
    {index + 1}. {item}
  </Text>
);

const SingleRecipeEdit = ({
  image,
  ingredients,
  title,
  instructions,
  owner,
  bool,
  category,
  handleSubmit,
}) => {
  const [showSteps, setShowSteps] = useState(false);
  const [ingredientsList, setIngredientsList] = useState(false);

  {
    if (bool) {
      return (
        <ScrollView style={{ backgroundColor: "#F1F4FB" }}>
          <View style={styles.viewStyle}>
            <Image
              style={styles.image}
              source={{ uri: image !== "" ? image : recipeImg }}
            />
            <View style={styles.favButton}>
              <Icon
                style={styles.favIcon}
                name="md-heart"
                size={30}
                color="#35b056"
              />
            </View>
          </View>

          <View style={styles.viewThree}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.viewProfile}>
              <Image
                style={styles.profilePic}
                source={{ uri: owner.image !== "" ? owner.image : userIcon }}
              />
              <Text style={styles.name}>by {owner.name}</Text>
            </View>

            <Text style={styles.text}>Ingredientes</Text>
            <TouchableOpacity
              onPress={() => setIngredientsList(!ingredientsList)}
            >
              {ingredientsList ? (
                // <FlatList
                //   maxToRenderPerBatch={1}
                //   initialNumToRender={5}
                //   keyExtractor={(ingredient) => ingredient.name}
                //   data={ingredients}
                //   renderItem={renderIngredient}
                // />
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
                // <FlatList
                //   maxToRenderPerBatch={1}
                //   initialNumToRender={5}
                //   keyExtractor={(instruction) => instruction}
                //   data={instructions}
                //   renderItem={Step}
                // />
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

          <TouchableOpacity
            style={{ marginTop: 100 }}
            onPress={() =>
              handleSubmit({
                title,
                image,
                ingredients,
                instructions,
                category,
                owner,
              })
            }
          >
            <Text>CONFIRMAR RECETA</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return null;
    }
  }
};

export default SingleRecipeEdit;
