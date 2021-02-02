import React from "react";
import { View, Image, Text, FlatList, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import ProductsByStore from "./partials/ProductsByStore";
import styles from "./styles";
import { banner, storeImg } from "../../utils/constants";
import Icon from "react-native-vector-icons/Ionicons";

const SingleMarket = ({ route }) => {
  const storeId = route.params.storeId;
  const stores = useSelector((state) => state.storesReducer.stores);
  const { products } = useSelector((state) => state.productsReducer);
  const productsStore = products.filter((p) => p.store._id == storeId);
  const [myMarket] = stores.filter((s) => s._id === storeId);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.banner}
        source={{
          uri: banner,
        }}
      ></ImageBackground>
      <View style={styles.containerData}>
        <Image
          style={styles.image}
          source={myMarket.image ? { uri: myMarket.image } : storeImg}
        />
        <View style={styles.info}>
          <View style={styles.delivery}>
            <Icon name="bicycle" size={30} />
            {stores.delivery ? (
              <Icon name="checkmark" size={30} color="#35b056" />
            ) : (
              <Icon name="close" size={30} color="red" />
            )}
          </View>

          <Text style={styles.open}>ABIERTO</Text>
        </View>

        <Text style={styles.title}>{myMarket.name}</Text>
        <View style={styles.infoDos}>
          <Icon name="location-outline" size={30} />
          <Text style={styles.address}>{myMarket.address}</Text>
        </View>
        {/* <Text style={styles.hour}>Días: Lunes a Viernes</Text>
        <Text style={styles.hour}>Horario: 9-21 hrs</Text> */}

        <FlatList
          data={myMarket.productsCategories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ProductsByStore category={item} products={productsStore} />
          )}
        />
      </View>
    </View>
  );
};

export default SingleMarket;
