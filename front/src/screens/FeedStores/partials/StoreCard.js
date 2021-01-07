import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "../styles/storeCard";
import Icon from "react-native-vector-icons/Ionicons";
import { storeImg } from "../../../utils/constants";
import { useNavigation } from "@react-navigation/native";

const StoreCard = ({ store, allProducts }) => {
  const myProducts = allProducts.filter((p) => p.store._id === store._id);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Image
          style={styles.image}
          source={store.image ? { uri: store.image } : storeImg}
        />

        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Text style={styles.title}>{store.name}</Text>
          <Text style={styles.address}>{store.address}</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        {myProducts.length ? (
          <FlatList
            contentContainerStyle={styles.upper}
            data={myProducts}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SingleProduct", { productId: item._id })
                }
                style={styles.productContainer}
              >
                <Image style={styles.products} source={{ uri: item.image }} />
              </TouchableOpacity>
            )}
            keyExtractor={(product) => product._id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noProducts}>
            Este comercio aún no ha cargado sus productos
          </Text>
        )}
      </View>

      <View style={styles.info}>
        <View style={styles.icon}>
          <Icon style={{}} name="bicycle" size={30} color="black" />
          {store.delivery ? (
            <Icon style={{}} name="checkmark" size={30} color="#35b056" />
          ) : (
            <Icon style={{}} name="close" size={30} color="red" />
          )}
        </View>
        <Text style={styles.open}>ABIERTO</Text>
      </View>
    </View>
  );
};

export default StoreCard;
