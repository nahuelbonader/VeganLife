import React, { useEffect, useState } from "react";
import { Text, View, TextInput, FlatList } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles/ingredients";
import colors from "../../../styles/colors";

export default ({ setIngredients, ingredients }) => {
  const [quantity, setQuantity] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [alert, setAlert] = useState(false);

  const addIngredient = () => {
    const nameIngredients = ingredients.map((e) => e.ingredient);
    if (nameIngredients.includes(ingredient)) return setAlert(true);
    setIngredients([...ingredients, { quantity, ingredient }]);
    setQuantity("");
    setIngredient("");
  };

  const deleteIngredient = (ingredient) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  useEffect(() => {
    if (alert) setAlert(false);
  }, [ingredient]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredientes</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Ingrediente"}
          onChangeText={setIngredient}
          value={ingredient}
        />
        <TextInput
          style={styles.input}
          placeholder={"Cantidad"}
          onChangeText={setQuantity}
          value={quantity}
        />
        <MaterialCommunityIcons
          onPress={addIngredient}
          name="plus-circle-outline"
          size={27}
          color={colors.darkGreen}
        />
      </View>
      {alert ? (
        <Text>El ingrediente que está intentando ingresar ya existe</Text>
      ) : null}
      <View style={styles.listContainer}>
        <FlatList
          style={{ width: "100%" }}
          data={ingredients}
          keyExtractor={(item) => item.ingredient}
          renderItem={({ item }) => (
            <View style={styles.ingredientContainer}>
              <Text style={styles.textIngredient}>
                {item.ingredient + " ..... " + item.quantity}
              </Text>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={22}
                onPress={() => deleteIngredient(item)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
