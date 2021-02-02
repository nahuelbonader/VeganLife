import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Dropdown from "react-native-dropdown-menu";
import handleOpenImage from "../../../functions/picker";
import { productImg } from "../../../utils/constants";
import { RadioButton } from "react-native-paper";
import ProductsList from "./ProductsList";

import styles from "../styles/products";
import colors from "../../../styles/colors";

export default ({ products, categories, addProduct, deleteProduct }) => {
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const categoriesDropDown = categories.map((c) => ({ value: c }));

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryStore, setCategory] = useState("");
  const [available, setAvailable] = useState(false);

  const createProduct = async (category) => {
    const success = await addProduct(category);
    if (success) {
      setImage("");
      setTitle("");
      setDescription("");
      setPrice(0);
      setStock(0);
      setCategory("");
      setAvailable(false);
      setModalVisible(false);
    } else {
      setAlert(true);
      setAlertText("Hubo un error en la carga del producto");
    }
  };

  useEffect(() => {
    if (alert) setAlert(false);
  }, [image, title, description, price, stock, categoryStore]);

  return (
    <View style={styles.container}>
      <ProductsList data={products} deleteProduct={deleteProduct} />
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
              <View style={styles.avatarContainer}>
                <TouchableOpacity
                  style={styles.avatarPlaceholder}
                  onPress={() => handleOpenImage(setImage)}
                >
                  <Image
                    style={styles.avatar}
                    source={image ? { uri: image } : productImg}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                value={title}
                style={styles.input}
                placeholder="Título"
                onChangeText={setTitle}
              />
              <TextInput
                value={description}
                style={styles.input}
                placeholder="Descripción"
                onChangeText={setDescription}
              />
              <View style={styles.rowContainer}>
                <Text style={styles.text}>$</Text>
                <TextInput
                  keyboardType="number-pad"
                  value={price}
                  style={styles.shortInput}
                  placeholder="0000"
                  onChangeText={setPrice}
                />
                <Text style={styles.text}> Stock: </Text>
                <TextInput
                  keyboardType="number-pad"
                  value={stock}
                  style={styles.shortInput}
                  placeholder="0000"
                  onChangeText={setStock}
                />
              </View>
              <Dropdown // CORREGIR: https://www.npmjs.com/package/react-native-dropdown-menu
                style={{ flex: 1 }}
                bgColor={"white"}
                tintColor={"#666666"}
                activityTintColor={"green"}
                handler={setCategory}
                // style={styles.dropdown}
                data={categoriesDropDown}
              >
                <Text>Categorías</Text>
              </Dropdown>
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
                onPress={() =>
                  createProduct({
                    title,
                    image,
                    categoryStore,
                    description,
                    price,
                    stock,
                    available,
                  })
                }
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
