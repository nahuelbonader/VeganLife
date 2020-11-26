import React from 'react'
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

const SingleCategory = ({ recipes, categoryImage}) => {
const navigation = useNavigation();

   return (
     <View style={{backgroundColor: "white", paddingBottom:150}}>
       <View style={styles.viewStyle}>
         <Image
         style={styles.image}
         source={{ uri: categoryImage[0] !== ""? categoryImage[0] : null }}
         />
          </View>
         <FlatList
         keyExtractor = {recipes => recipes.title}
          data={recipes}
          renderItem={({item})=>{
            return(
              <View>
              <TouchableOpacity onPress={() => navigation.navigate("Recipe",{recipeId:item._id})}>
                 <View style={styles.listView}>
                   <Image
                   style={styles.listImage}
                   source={{uri: item.image !== "" ? item.image : null}}
                   />
                    <Text style={styles.title}>{item.title.substr(0,30)+"..."}</Text>
                     <Text style={styles.description}>{item.ingredients[0].substr(0,100)+"..."}</Text>
                 </View>
                 </TouchableOpacity>
              </View>
            )
          }}
          >
         </FlatList>

     </View>
   )
}

const styles = StyleSheet.create({
  viewStyle:{
    marginVertical:normalize(20),
    height:normalize(180),
    flexDirection:"row"
  },
  image:{
    borderRadius: normalize(20),
    flex:1
  },
  listView:{
    flexDirection: "row",
    backgroundColor:"#F1F4FB",
    marginBottom: "4%",
    marginHorizontal:"5%",
    borderRadius:normalize(25),
    paddingVertical:normalize(20),

  },
  listImage:{
    width:"22%",
    height:"90%",
    borderRadius:normalize(100),
    marginHorizontal:"3%"
  },

  title:{
   position:"absolute",
   left:"25%",
   top:"9%",
   flex:3,
   fontWeight:"bold",
   fontSize:normalize(18)
 },
 description:{
   marginTop:"7%",
   flex:1,
   color:"#808080"
 }
})

export default SingleCategory
