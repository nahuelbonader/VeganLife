import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { newRecipeImg } from "../utils/constants";

import normalize from "react-native-normalize";
import colors from "../styles/colors";

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

const styles = StyleSheet.create({
  // CONTAINERS
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerDropdown: {
    flex: 1,
    paddingLeft: "2%",
    justifyContent: "center",
    width: "85%",
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    flex: 9,
    width: "90%",
    shadowColor: "#151734",
    shadowRadius: 30,
    shadowOpacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTouchable: {
    flex: 0.6,
    width: "100%",
    justifyContent: "center",
    marginBottom: "10%",
  },

  // INPUTS
  input: {
    height: normalize(40),
    width: "85%",
    fontSize: 20,
    borderBottomColor: colors.dartmouthGreen,
    borderBottomWidth: 1,
    paddingLeft: "2%",
    marginBottom: "3%",
  },

  // IMAGE
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: normalize(25),
    borderColor: colors.niceGray,
    borderWidth: 1,
  },

  // TEXT
  text: {
    color: "black",
    fontWeight: "200",
    fontSize: 15,
    textTransform: "uppercase"
  },
});
