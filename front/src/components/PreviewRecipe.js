import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { HeaderHeightContext } from "react-navigation-stack";
import colors from "../styles/colors";
import { recipeImg } from "../utils/constants";

const Ingredient = ({ quantity, ingredient }) => (
  <Text style={styles.textList}>
    {quantity} {ingredient}
  </Text>
);

const Step = ({ item, index }) => (
  <Text style={styles.textList}>
    {index + 1}. {item}
  </Text>
);

export default ({ title, image, category, ingredients, instructions }) => (
  <View style={styles.container}>
    <Text style={styles.title}>¿Deseas confirmar la receta?</Text>
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ alignItems: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.dataContainer}>
        <Image
          style={styles.image}
          source={{ uri: image !== "" ? image : recipeImg }}
        />

        <Text style={styles.text}>Título: {title}</Text>
        <Text style={styles.text}>Categoría: {category}</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.subtitle}>Ingredientes</Text>
        {ingredients.map((e, index) => (
          <Ingredient
            quantity={e.quantity}
            ingredient={e.ingredient}
            key={index}
          />
        ))}
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.subtitle}>Paso a Paso</Text>
        {instructions.map((step, index) => (
          <Step item={step} index={index} key={index} />
        ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  scrollContainer: {
    width: "100%",
  },
  dataContainer: {
    width: "85%",
    marginBottom: "5%",
  },

  //
  image: {
    width: "100%",
    height: normalize(200),
    alignSelf: "center",
    borderRadius: normalize(25),
    borderColor: colors.niceGray,
    borderWidth: 1,
    marginBottom: "5%",
  },

  // TEXT
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkGreen,
    textTransform: "uppercase",
    marginBottom: "5%",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darkGreen,
    textTransform: "uppercase",
    marginBottom: "1%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: "1%",
    alignSelf: "center",
  },
  textList: {
    marginBottom: "1%",
  },
});
