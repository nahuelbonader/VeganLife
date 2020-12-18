import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import estilos from "../styles/singleRecipe";
import styles from "../styles/singleProduct"

const SingleProduct = ({ product, cantidad, handleAdd, handleLess }) => (
  <View style={styles.container}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f1f4fb",
        width: 400,
        alignItems: "center",
      }}
    >
      <Text style={styles.store}>{product.store.name}</Text>
      {/* <TouchableOpacity
        style={estilos.favButton}
        onPress={() => console.log("FAVS")}
      >
        <Icon
          style={estilos.favIcon}
          name={"heart-outline"}
          size={30}
          color="#35b056"
        />
      </TouchableOpacity> */}

      <Image style={styles.image} source={{ uri: product.image }} />
    </View>

    <View style={styles.subcontainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>$ {product.price}</Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 25, paddingLeft: 20 }}>
        <TouchableOpacity onPress={() => handleLess()}>
          <AntDesign name="minus" size={20} style={{ color: "#006028" }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingHorizontal: 15, color: "#006028" }}>
          {" "}
          {cantidad}{" "}
        </Text>
        <TouchableOpacity onPress={() => handleAdd()}>
          <AntDesign name="plus" size={20} style={{ color: "#006028" }} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          paddingLeft: 20,
          fontSize: 15,
          marginTop: 10,
          color: "#006028",
        }}
      >
        Stock: {product.stock}
      </Text>

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={{ color: "#006028" }}>Descripcion</Text>
        <Text style={{ color: "#A9A9A9" }}>{product.description}</Text>

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.submit}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);


export default SingleProduct;
