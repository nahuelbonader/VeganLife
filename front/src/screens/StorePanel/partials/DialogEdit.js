import React, { useState, useEffect } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { Dialog, Portal, Text, Button, RadioButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../../store/actions/products";
import colors from "../../../styles/colors";
import styles from "../styles/dialogEdit";

export default ({ visible, hideDialog, productId }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  const [product] = products.filter((p) => p._id == productId);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categoryStore, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [available, setAvailable] = useState("");
  const [checked, setChecked] = useState("first");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price.toString());
      setImage(product.image);
      setCategory(product.categoryStore);
      setDescription(product.description);
      setStock(product.stock.toString());
      setAvailable(product.available);
    }
  }, [product]);

  const handleSubmit = (product) => {
    dispatch(editProduct(product));
    hideDialog();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea>
          <Dialog.Title>
            <MaterialCommunityIcons name="pencil" size={35} color="black" />
          </Dialog.Title>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: "3%",
              marginTop: "10%",
            }}
          >
            <View style={styles.row}>
              <TextInput
                style={styles.inputNombre}
                value={title}
                placeholder="nombre"
                onChangeText={(text) => setTitle(text)}
              />
              <Text style={styles.txt}>$ </Text>
              <TextInput
                value={price}
                style={styles.inputPrecio}
                placeholder="000000"
                onChangeText={(text) => setPrice(text)}
              />
            </View>
            <View>
              <TextInput
                value={image}
                style={styles.inputColumn}
                placeholder="imagen Url"
                onChangeText={(text) => setImage(text)}
              />
              <TextInput
                value={categoryStore}
                style={styles.inputColumn}
                placeholder="Categoria"
                onChangeText={(text) => setCategory(text)}
              />
              <TextInput
                value={description}
                style={styles.inputColumn}
                placeholder="Descripción"
                onChangeText={(text) => setDescription(text)}
              />
              <View style={styles.row}>
                <Text style={styles.txt2}> Disponibles en Stock: </Text>
                <TextInput
                  value={stock}
                  style={styles.inputPrecio}
                  placeholder="000000"
                  onChangeText={(text) => setStock(text)}
                />
              </View>
              <Text style={styles.txt3}>¿Sigue disponible?</Text>
              <View style={styles.row2}>
                <Text>Si</Text>
                <RadioButton
                  color={colors.carrot}
                  uncheckedColor={colors.greenligth}
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => {
                    setAvailable(true);
                    setChecked("first");
                  }}
                />
                <Text>No</Text>
                <RadioButton
                  color={colors.carrot}
                  uncheckedColor={colors.greenligth}
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => {
                    setAvailable(false);
                    setChecked("second");
                  }}
                />
              </View>
            </View>
            <Dialog.Actions>
              <View style={styles.row}>
                <View style={styles.exit}>
                  <Button color={colors.carrot} onPress={hideDialog}>
                    salir
                  </Button>
                </View>
                <View style={styles.edit}>
                  <Button
                    color={colors.greenligth}
                    onPress={() =>
                      handleSubmit({
                        title,
                        price,
                        image,
                        categoryStore,
                        description,
                        stock,
                        available,
                        checked,
                        _id: productId,
                      })
                    }
                  >
                    editar
                  </Button>
                </View>
              </View>
            </Dialog.Actions>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};
