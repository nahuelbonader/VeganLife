import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import DropdownMenu from "react-native-dropdown-menu";
import { newRecipeImg } from "../../../utils/constants";
import styles from "../styles/data";
import colors from "../../../styles/colors";

export default ({
  handleInput,
  title,
  openImage,
  image,
  handleCategorie,
  categories,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={"Título de la receta"}
      onChangeText={handleInput}
      value={title}
    />
    <DropdownMenu // CORREGIR: https://www.npmjs.com/package/react-native-dropdown-menu
      handler={handleCategorie}
      style={styles.containerDropdown}
      data={categories}
    >
      <Text>Categorías</Text>
    </DropdownMenu>

    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={openImage} style={styles.avatarTouchable}>
        <Image
          style={styles.avatar}
          source={{ uri: image ? image : newRecipeImg }}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Selecciona una imagen de tu galería</Text>
    </View>
  </View>
);
