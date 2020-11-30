import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import normalize from "react-native-normalize";
import styles from "../styles/singleRecipe";
import { LinearGradient } from "expo-linear-gradient";


const SingleRecipe = ({
  image,
  ingredients,
  title,
  instructions,
  ownerImage,
  ownerName,
  
}) => {
  const navigation = useNavigation();

  const [showAll, setShowAll] = useState(false);
  const [ingredientsList, setIngredientsList] = useState(false);

  return (
    <View style={{ backgroundColor: "#F1F4FB" }}>
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image style={styles.image} source={{ uri: image }} />
          <TouchableOpacity
            style={styles.favButton}
            onPress={() => console.log("presionado")}
          >
            <View>
              <Icon
                style={styles.favIcon}
                name="md-heart"
                size={30}
                color="#35b056"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewThree}>
          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity onPress={() => console.log("User Profile")}>
            <View style={styles.viewProfile}>
              <Image
                style={styles.profilePic}
                source={{
                  uri:
                    ownerImage !== ""
                      ? ownerImage
                      : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg",
                }}
              />
              <Text style={styles.name}>by: {ownerName}</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.text}>Ingredientes</Text>

          <TouchableOpacity
            onPress={() => setIngredientsList(!ingredientsList)}
          >
            {ingredientsList ? (
              <FlatList
                data={ingredients}
                renderItem={({ item }) => {
                  console.log("recetasssss", item.ingredients);
                  return (
                    <Text style={styles.textTwo}>
                      {ingredients}
                    </Text>
                  );
                }}
              />
            ) : (
              <>
                <FlatList
                  data={ingredients}
                  renderItem={({ item }) => {
                    console.log("ingredientesssss", ingredients);
                    return (
                      <Text style={styles.textTwo}>
                        {item.quantity}
                        {item.ingredients}
                      </Text>
                    );
                  }}
                />
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.0, y: 1.0 }}
                  locations={[0.1, 1.0]}
                  colors={["#ffffff95", "#fffffff9"]}
                  useViewFrame={false}
                  style={styles.gradient}
                />
              </>
            )}
          </TouchableOpacity>

          {/* mapear arreglo con objetos ingredientes [{cantidad: 200g, ingrediente: azucar},{cantidad: 200g, ingrediente: azucar}] */}
          <Text style={styles.text}>Paso a Paso</Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            {showAll ? (
              <Text style={styles.textTwo}>{instructions}</Text>
            ) : (
              <>
                <Text style={styles.textTwo}>{instructions}</Text>
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 0.0, y: 1.0 }}
                  locations={[0.1, 1.0]}
                  colors={["#ffffff70", "#fffffff7"]}
                  useViewFrame={false}
                  style={styles.gradient}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleRecipe;
