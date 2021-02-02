import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Image, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { productImg } from "../../utils/constants";
import styles from "./styles";

export default ({ route }) => {
  const { productId } = route.params;
  const { products } = useSelector((state) => state.productsReducer);
  const [product] = products.filter((p) => p._id == productId);
  const [cantidad, setCantidad] = useState(0);

  const handleAdd = () =>
    cantidad < product.stock ? setCantidad(cantidad + 1) : null;

  const handleLess = () => (cantidad > 0 ? setCantidad(cantidad - 1) : null);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#f1f4fb",
          width: "100%",
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

        <Image
          style={styles.image}
          source={product.image ? { uri: product.image } : productImg}
        />
      </View>

      <View style={styles.subcontainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.title}>$ {product.price}</Text>
        </View>

        <View
          style={{
            flex: 2,
            width: "100%",
          }}
        >
          <View
            style={{ flexDirection: "row", marginTop: 25, paddingLeft: 20 }}
          >
            <TouchableOpacity onPress={() => handleLess()}>
              <AntDesign name="minus" size={20} style={{ color: "#006028" }} />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 20, paddingHorizontal: 15, color: "#006028" }}
            >
              {cantidad}
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
        </View>

        <View
          style={{
            flex: 2,
            width: "100%",
            alignItems: "center",
            paddingTop: "3%",
          }}
        >
          <Text style={{ color: "#006028" }}>Descripcion</Text>
          <Text style={{ color: "#A9A9A9" }}>{product.description}</Text>
        </View>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.submit}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
