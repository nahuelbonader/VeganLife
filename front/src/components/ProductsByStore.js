import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const ProductsByStore = ({category}) => {
 
    const allProducts = useSelector((state) => state.productsReducer.products);
    const product = allProducts.filter((p)=>p.categoryStore === category) 
    const navigation = useNavigation(); 

    return (<View>
        
        <FlatList
            contentContainerStyle={{}}
            data={product}
            renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={()=>navigation.navigate('SingleProduct', { productId: item._id })}
            >
                <Image style={{width:100, height: 100}} source={{uri: item.image}} />

            </TouchableOpacity>
            )}
            keyExtractor={(index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}    
          />
        
    
        </View>
      );
    }
    
      
      export default ProductsByStore;
      