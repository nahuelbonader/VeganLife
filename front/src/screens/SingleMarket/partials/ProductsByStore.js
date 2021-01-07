import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/productsByStore";

const ProductsByStore = ({ category, products }) => {
  const productsCategory = products.filter((p) => p.categoryStore === category);
  const navigation = useNavigation();

  return (
    <View>
      {productsCategory.length ? (
        <>
          <Text style={styles.categoryName}>{category}</Text>
          <FlatList
            data={productsCategory}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SingleProduct", { productId: item._id })
                }
              >
                <Image style={styles.products} source={{ uri: item.image }} />
              </TouchableOpacity>
            )}
            keyExtractor={(index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>
      ) : null}
    </View>
  );
};

export default ProductsByStore;
