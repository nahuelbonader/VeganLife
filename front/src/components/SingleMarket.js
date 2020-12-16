import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductsByStore from './ProductsByStore'

const SingleMarket = ({ route }) => {

 
const storeId = route.params.storeId
const stores = useSelector((state) => state.storesReducer.stores);
const allProducts = useSelector((state) => state.productsReducer.products);
const banner = "https://data.whicdn.com/images/328889501/original.png"

const [myMarket] = stores.filter((s)=>s._id === storeId)

return (<View>

    <Image style={{width: 100, height: 100}} source={ {uri: myMarket.image}} />
    <Text>{myMarket.name}</Text>
    <Text>{myMarket.address}</Text>

    <FlatList
        contentContainerStyle={{}}
        data={myMarket.productsCategories}
        renderItem={({ item, index }) => (
            <View>
            <Text>
              {item}
            </Text> 
            <ProductsByStore category={item} />
          </View>
        )}
        keyExtractor={(index) => index}

      />
    

    </View>
  );
}

  
  export default SingleMarket;
  