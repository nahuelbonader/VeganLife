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
import styles from "../styles/singleRecipe";
import LinearGradient from "expo-linear-gradient";

const LG = (
  <LinearGradient
    start={{ x: 0.0, y: 0.0 }}
    end={{ x: 0.0, y: 1.0 }}
    locations={[0.1, 1.0]}
    colors={["#ffffff70", "#fffffff7"]}
    useViewFrame={false}
    style={styles.gradient}
  />
);

const recipeImg =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-yjdnk&psig=AOvVaw2ml9YNEFL3_kZ9ndKhChxB&ust=1606530297851000&source=images&cd=vfe&ved=2ahUKEwiGnojv1aHtAhVNANQKHUZXCmgQjRx6BAgAEAc";

const ownerImg =
  "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg";

const SingleRecipe = ({
  image,
  ingredients,
  title,
  instructions,
  ownerImage,
  ownerName,
}) => {
  const [showSteps, setShowSteps] = useState(false);
  const [ingredientsList, setIngredientsList] = useState(false);

  return (
    <View style={{ backgroundColor: "#F1F4FB" }}>
      <View style={styles.viewStyle}>
        <Image
          style={styles.image}
          source={{ uri: image !== "" ? image : recipeImg }}
        />
        <TouchableOpacity
          style={styles.favButton}
          onPress={() => console.log("presionado")}
        >
          <Icon
            style={styles.favIcon}
            name="md-heart"
            size={30}
            color="#35b056"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewThree}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.viewProfile}
          onPress={() => console.log("User Profile")}
        >
          <Image
            style={styles.profilePic}
            source={{ uri: ownerImage !== "" ? ownerImage : ownerImg }}
          />
          <Text style={styles.name}>by: {ownerName}</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Ingredientes</Text>
        <TouchableOpacity onPress={() => setIngredientsList(!ingredientsList)}>
          {ingredientsList ? (
            <FlatList
              keyExtractor={(ingredient) => ingredient.name}
              data={ingredients}
              renderItem={({ item }) => (
                <Text style={styles.textTwo}>
                  {item.quantity} {item.ingredient}
                </Text>
              )}
            />
          ) : (
            <>
              {ingredients.map((element, index) => {
                if (index < 5) {
                  return (
                    <Text style={styles.textTwo} key={element.ingredient}>
                      {element.quantity} {element.ingredient}
                    </Text>
                  );
                }
              })}
              {ingredients.length > 4 ? LG : null}
            </>
          )}
        </TouchableOpacity>

        <Text style={styles.text}>Paso a Paso</Text>
        <TouchableOpacity onPress={() => setShowSteps(!showSteps)}>
          {showSteps ? (
            <Text style={styles.textTwo}>{instructions}</Text>
          ) : (
            <>
              <Text style={styles.textTwo}>{instructions}</Text>
              {LG}
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleRecipe;
