import React from 'react'
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const SingleRecipe = ({ image, ingredients, title, instructions, ownerImage, ownerName}) => {
  return (
    <View style={{backgroundColor:"#F1F4FB"}}>
    <ScrollView>
      <View style= {styles.viewStyle}>
         <Image
          style= {styles.image}style= {styles.image}
          source={{uri: image !== ""? image: null}}/>
         <TouchableOpacity style={styles.favButton} onPress={()=>console.log("presionado")}>
           <View  >
           <Icon style={{alignSelf:"center",top:8,fontSize:25,}} name="md-heart" size={30} color="#35b056" />
           </View>
         </TouchableOpacity>
      </View>
      <View style={styles.viewProfile}>
        <Image
        style={styles.profilePic}
         source= {{
           uri: ownerImage !== "" ? ownerImage : null
         }}
        />
        <Text style={styles.name}>{ownerName}</Text>
        </View>
        <View style={styles.viewThree}>
          <View style={{marginHorizontal: 20}}>
           <Text style={styles.title}>{title}</Text>
              <Text style={styles.text}>Ingredientes</Text>
               <Text style={styles.textTwo}>{ingredients}</Text>
             <Text style={styles.text}>Paso a Paso</Text>
            <Text style={styles.textTwo}>{instructions}</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
  height:200,
  flexDirection: "row",
  marginVertical:10,
  },
 image:{
   borderRadius: 25,
   flex: 1
 },
 viewProfile:{
  flexDirection: 'row',
  marginHorizontal: 30
},
 profilePic:{
   width:65,
   height:65,
   borderRadius:50
 },
 name:{
   alignSelf:"stretch",
   color: 'green',
   top:20,
   marginLeft:10,
   fontWeight:"bold",
   fontSize:20
 },
 viewThree:{
   borderRadius:25,
   backgroundColor:"white",
   paddingBottom:70,
   marginTop: 15
 },
 title:{
   marginTop:10,
   marginBottom:15,
   color: 'green',
   fontSize: 30,
   alignSelf:'center',
   fontWeight: 'bold',
   textShadowColor: 'rgba(0, 0, 0, 0.40)',
   textShadowOffset: {width: 1, height: 2},
   textShadowRadius: 10
 },
 text:{
   textTransform: 'uppercase',
   color:'green',
   fontWeight: "bold",
   fontSize:20,
   marginTop:15,
   marginBottom:10

 },
 textTwo:{
   color:'#808080',
   fontSize:17,
   marginBottom:5
 },
 favButton:{
   width:40,
   height:40,
   backgroundColor:"white",
   borderRadius: 50,
   position: "absolute",
   right:30,
   top:140
 }
})

export default SingleRecipe
