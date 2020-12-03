import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity  } from 'react-native'
import { useSelector } from 'react-redux'

const Search = ({navigation}) => {
const content = useSelector((state)=> state.searchContentReducer.content)
const param = useSelector((state)=> state.searchContentReducer.param )
const ownerImg =
  "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg";
console.log("CONTENT",content,"PARAM", param);
  return(
    <View style={styles.generalView}>
      {param == "recipes"?
       <FlatList
       keyExtractor={(content) => content.title}
        data={content}
        renderItem={({item}) => {
          return (
          <TouchableOpacity onPress={()=> navigation.navigate("Recipe",{recipeId:item._id})}>
             <View style={styles.imgView}>
                <Image
                style={styles.image}
                source={{uri: item.image}}/>
                <View style={styles.textView}>
                  <Text style={styles.title}>{item.title.length > 30?item.title.substr(0,35)+"...":item.title}</Text>
                  <Text style={styles.text}>{item.instructions[0]}</Text>
                  <Text style={styles.author}> By: {item.owner.name}</Text>
                </View>
             </View>
           </TouchableOpacity >
          )
        }}
       />
       :
       param == "users"?
       <FlatList
       keyExtractor={(content) => content.email}
        data={content}
        renderItem={({item}) => {
          return (
          <TouchableOpacity>
             <View style={styles.imgView}>
                <Image
                style={styles.image}
                source={{uri: !item.image? ownerImg : item.image }}/>
                <View style={styles.textView}>
                  <Text style={styles.title2}>{item.name.length > 30?item.title.substr(0,35)+"...":item.name}</Text>
                  <Text style={styles.author}>{item.role}</Text>
                </View>
             </View>
           </TouchableOpacity >
          )
        }}
       />
       :
       null
      }
   </View>
  )
}

const styles = StyleSheet.create({
  generalView:{
    marginHorizontal:"5%",
    marginVertical:"7%",
  },
  image:{
    width:90,
    height:90,
    borderRadius:100,
    marginVertical:"5%",
    marginHorizontal: "2%"
  },
  imgView:{
    flexDirection:"row",
    borderRadius:25,
  backgroundColor:"#EAEEF5",
    marginBottom:"4%"
},
title:{
  fontWeight:"bold",
  marginVertical:"3%"
},
text:{
  color:"#8A8A8A"
},
textView:{
  flexDirection:"column"
},
author:{
justifyContent:'flex-end',
marginTop:"5%",
color:"green"
},
title2:{
  fontWeight:"bold",
  marginVertical:"15%"
}
})

export default Search
