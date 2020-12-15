import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import normalize from "react-native-normalize";
import colors from "../styles/colors";

// const Categorie = () =>

export default ({ categories, addCategorie }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categorie, setCategorie] = useState("");

  const createCategorie = () => {
    setModalVisible(false);
    addCategorie(categorie);
  };

  useEffect(() => setCategorie(""), [categories]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(categorie) => categorie}
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.containerCategorie}>
            <Text style={styles.textCategorie}>{item}</Text>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={20}
              color="black"
              onPress={() => console.log("delete categorie")}
            />
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Nueva categoría</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                value={categorie}
                style={styles.input}
                placeholder="Descripción"
                onChangeText={setCategorie}
              />
              <TouchableOpacity onPress={createCategorie}>
                <Text>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  containerCategorie: {
    alignSelf: "center",
    width: "95%",
    height: normalize(30),
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "3%",
  },
  textCategorie: {
    width: "100%",
    fontSize: 17,
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "6%",
    backgroundColor: colors.darkGreen,
    paddingHorizontal: "15%",
    paddingVertical: "1%",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: colors.background,
  },
  // Modal
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
  modalView: {
    width: "80%",
    height: normalize(110),
    backgroundColor: colors.darkGray,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  input: {
    width: "90%",
    borderBottomColor: colors.button,
    borderBottomWidth: 1,
    marginBottom: "5%",
    paddingLeft: "1.5%",
  },
});
