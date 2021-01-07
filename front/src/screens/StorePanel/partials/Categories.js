import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/categories";
import colors from "../../../styles/colors";

export default ({ categories, addCategorie, deleteCategorie }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categorie, setCategorie] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const createCategorie = () => {
    const value = categorie.trim();
    if (value.length == 0) {
      setAlertText("Ingrese un nombre para la categoría");
      setAlert(true);
    } else if (categories.includes(value)) {
      setAlertText("La categoría que intenta ingresar ya existe");
      setAlert(true);
    } else {
      setModalVisible(false);
      addCategorie(value);
    }
  };

  useEffect(() => setCategorie(""), [categories]);
  useEffect(() => setAlert(false), [categorie]);

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
              size={22}
              color={colors.carrot}
              onPress={() => deleteCategorie(item)}
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
                placeholder="Categoría"
                onChangeText={setCategorie}
                autoFocus
              />

              <TouchableOpacity
                onPress={createCategorie}
                style={styles.btnSubmit}
              >
                <Text style={styles.textSubmit}>Confirmar</Text>
              </TouchableOpacity>
            </View>
            {alert ? <Text style={styles.textAlert}>{alertText}</Text> : null}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
