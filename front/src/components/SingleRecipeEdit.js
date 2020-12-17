import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { userIcon, recipeImg } from "../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/singleRecipe";

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
  handleBackBoolean
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
                color = {colors.font}
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

          <TouchableOpacity
            style={localStyles.boton}
            onPress={() =>
              handleBackBoolean()
            }
          >
            <Text style={localStyles.title}>VOLVER</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={localStyles.boton}
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
            <Text style={localStyles.title}>CONFIRMAR RECETA</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return null;
    }
  }
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  title:{
    fontSize:20,
    textAlign: "center",
    fontWeight: "bold"
  },
  input:{
    fontSize: 20, 
    borderBottomColor: "#35b056",
    borderBottomWidth: 2,
    marginTop: 25,
    padding: 10 ,
    marginHorizontal: 40
  },
  boton: {
    marginTop: 75,
    alignItems: "center",
    backgroundColor: "#35b056",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 75
  }
});


export default SingleRecipeEdit;
