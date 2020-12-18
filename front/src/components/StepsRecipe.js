import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MaterialChip from "react-native-material-chip";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import colors from "../styles/colors";
import normalize from "react-native-normalize";

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
  stepContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: "1%",
    marginTop: "2%",
    paddingBottom: "2%",
    borderBottomColor: colors.niceGray,
    borderBottomWidth: 1,
  },
  textContainer: {
    width: "90%",
  },

  // INPUTS
  input: {
    width: "80%",
    fontSize: 18,
    borderBottomColor: "#35b056",
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
  textStept: {
    fontSize: 16,
    color: colors.darkGray,
  },
});
