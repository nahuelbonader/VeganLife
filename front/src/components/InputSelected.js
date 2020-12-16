import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

import MaterialChip from "react-native-material-chip";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RNPickerSelect from "react-native-picker-select";
import { Dropdown } from "react-native-material-dropdown";

import OneButton from "./OneButton";

const InputSelected = ({
  textbtn,
  bool,
  ph,
  handleChange,
  handleBoolean,
  categories,
  handleBackBoolean,
  textbtn2,
}) => {
  let data = [];
  {
    if (bool) {
      for (let i = 0; i < categories.length; i++) {
        data.push({ value: categories[i].name });
      }

      return (
        <View style={{ marginTop: 100 }}>
          <Text style={styles.title}>Ingresa tu propia receta</Text>
          <Dropdown
            onChangeText={(value) => handleChange(value)}
            label={"Elegi tu categoria"}
            containerStyle={styles.input}
            data={data}
          />

          {ph == "Titulo de la receta" ? (
            <OneButton handleBoolean={handleBoolean} textbtn={textbtn} />
          ) : (
            <View>
              <OneButton handleBoolean={handleBackBoolean} textbtn={textbtn2} />
              <OneButton handleBoolean={handleBoolean} textbtn={textbtn} />
            </View>
          )}
        </View>
      );
    } else {
      return null;
    }
  }
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
    //borderBottomWidth: 2,
    marginTop: 25,
    padding: 10,
    marginHorizontal: 40,
  },
});

export default InputSelected;
