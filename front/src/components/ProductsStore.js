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
import { Dropdown } from "react-native-material-dropdown";

import { RadioButton } from "react-native-paper";
import ProductsList from "./ProductsList";
import useInputs from "../hooks/useInputs";
import styles from "../styles/productsStore";

import colors from "../styles/colors";

export default ({ products, categories, addProduct }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [available, setAvailable] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [inputs, handleChange] = useInputs();
  const { title, image, categoryStore, description, price, stock } = inputs;
  const categoriesDropDown = categories.map((c) => ({ value: c }));

  const createProduct = () => {
    addProduct({
      title,
      image,
      categoryStore,
      description,
      price,
      stock,
      available,
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ProductsList data={products} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Nuevo producto</Text>
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
                value={title}
                style={styles.input}
                placeholder="Nombre"
                onChangeText={handleChange("title")}
              />
              <TextInput
                value={image}
                style={styles.input}
                placeholder="Imagen Url"
                onChangeText={handleChange("image")}
              />
              <TextInput
                value={description}
                style={styles.input}
                placeholder="Descripción"
                onChangeText={handleChange("description")}
              />
              <View style={styles.rowContainer}>
                <Text style={styles.text}>$</Text>
                <TextInput
                  keyboardType="number-pad"
                  value={price}
                  style={styles.shortInput}
                  placeholder="0000"
                  onChangeText={handleChange("price")}
                />
                <Text style={styles.text}> Stock: </Text>
                <TextInput
                  keyboardType="number-pad"
                  value={stock}
                  style={styles.shortInput}
                  placeholder="0000"
                  onChangeText={handleChange("stock")}
                />
              </View>
              <Dropdown
                onChangeText={handleChange("categoryStore")}
                label={"Categoría"}
                containerStyle={styles.dropdown}
                data={categoriesDropDown}
              />
              <Text style={styles.questionText}>¿Está disponible?</Text>
              <View style={styles.optionsContainer}>
                <Text style={styles.optionText}>Si</Text>
                <RadioButton
                  status={available ? "checked" : "unchecked"}
                  onPress={() => setAvailable(true)}
                  color={colors.carrot}
                  uncheckedColor={colors.greenligth}
                />
                <Text style={styles.optionText}>No</Text>
                <RadioButton
                  status={!available ? "checked" : "unchecked"}
                  onPress={() => setAvailable(false)}
                  color={colors.carrot}
                  uncheckedColor={colors.greenligth}
                />
              </View>

              <TouchableOpacity
                onPress={createProduct}
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
