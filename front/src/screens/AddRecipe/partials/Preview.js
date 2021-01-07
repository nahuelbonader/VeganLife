import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { recipeImg } from "../../../utils/constants";
import styles from "../styles/preview";

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
