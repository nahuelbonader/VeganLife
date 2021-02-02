import React, { useState } from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles/instructions";
import colors from "../../../styles/colors";

export default ({ setInstructions, instructions }) => {
  const [instruction, setInstruction] = useState("");

  const addInstruction = () => {
    setInstructions([...instructions, instruction]);
    setInstruction("");
  };

  const deleteInstruction = (step) => {
    setInstructions(instructions.filter((e) => e !== step));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paso a Paso</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Paso a paso de la receta"
          onChangeText={setInstruction}
          value={instruction}
          multiline
        />

        <MaterialCommunityIcons
          onPress={addInstruction}
          name="plus-circle-outline"
          size={27}
          color={colors.darkGreen}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          style={{ width: "100%" }}
          data={instructions}
          keyExtractor={(index) => index}
          renderItem={({ item, index }) => (
            <View style={styles.stepContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStept}>{index + 1 + ". " + item}</Text>
              </View>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={22}
                onPress={() => deleteInstruction(item)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
