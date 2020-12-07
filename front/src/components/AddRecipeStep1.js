import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

import MaterialChip from "react-native-material-chip";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import OneButton from "./OneButton";

const AddRecipeStep1 = ({ textbtn, bool, ph, handleChange, handleBoolean }) => {
  {
    if (bool) {
      return (
        <View style={{ marginTop: 100 }}>
          <Text style={styles.title}>Ingresa tu propia receta</Text>
          <TextInput
            style={styles.input}
            placeholder={ph}
            onChangeText={(evt) => handleChange(evt)}
          />
          <OneButton handleBoolean={handleBoolean} textbtn={textbtn} />
        </View>
      );
    } else {
      return null;
    }
  }

  /* <InputDataRecipe  title={"Ingredientes"}/>
        <InputDataRecipe  title={"Paso a paso"}/>
        <InputDataRecipe  title={"Categoria (solo 1?)"}/> */
  /* <MaterialChip
        text="Example"
        onPress={() => console.log('press')}
        onDelete={() => console.log('delete')}
        style={{borderStartColor: "green", borderTopColor: "green", borderBottomColor: "green", borderEndColor: "green"}}
        //style={{borderColor:"green"}}
        rightIcon={
          <View
              style={{
                  height: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                  width: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                  borderRadius: MaterialChip.CHIP_RIGHT_ICON_RADIUS,
                  //backgroundColor: 'black',
                  borderWidth: 0,
                  default: true
              }}
              ><MaterialCommunityIcons name="close-circle-outline" size={20} /></View>}
        /> */
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    //backgroundColor: '#000000',
    fontSize: 20,
    borderBottomColor: "#35b056",
    borderBottomWidth: 2,
    marginTop: 25,
    padding: 10,
    marginHorizontal: 40,
  },
});

export default AddRecipeStep1;
