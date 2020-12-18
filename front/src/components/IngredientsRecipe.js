import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../styles/colors";
import normalize from "react-native-normalize";

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

const styles = StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputsContainer: {
    flex: 1.5,
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.niceGray,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: "3%",
  },
  listContainer: {
    flex: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ingredientContainer: {
    height: normalize(30),
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: "1%",
    marginTop: "2%",
    borderBottomColor: colors.niceGray,
    borderBottomWidth: 1,
  },

  // INPUTS
  input: {
    width: "35%",
    fontSize: 18,
    borderBottomColor: colors.greenligth,
    borderBottomWidth: 1,
    marginRight: "5%",
    paddingLeft: "1%",
  },

  // TEXT
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "300",
    color: colors.darkGreen,
    textTransform: "uppercase",
    width: "90%",
    alignContent: "center",
  },
  textIngredient: {
    fontSize: 16,
    color: colors.darkGray,
  },
});
