import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
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
    <Dropdown
      onChangeText={handleCategorie}
      label={"Categoría"}
      containerStyle={styles.containerDropdown}
      data={categories}
      fontSize={19}
      animationDuration={350}
      selectedItemColor={colors.dartmouthGreen}
    />
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
