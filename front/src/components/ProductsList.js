import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import Dialog from './DialogEdit'


import colors from "../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const List = ({ data }) => {

  const [id,setId] = React.useState("")
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  return (
    <View >
      <FlatList
      keyExtractor={(content) => content._id}
      data={data}
      renderItem={({item})=> {
        return(
          <View style={styles.backgroundContainer}>
             <Image
             style={styles.image}
             source={{uri: item.image}}
             />
             <View style={styles.textContentView}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.txt}>Stock: {item.stock} U</Text>
                <Text style={styles.txt}>Precio: ${item.price}</Text>
             </View>
             <View style={styles.view}>
            <TouchableOpacity
            onPress={()=>{
              setId(item._id)
              setVisible(true)
            }}
            >

                <MaterialCommunityIcons
                  style={styles.icon}
                  name="pencil"
                  size={24}
                  color="black"
                />
                <Dialog
                visible={visible}
                setVisible={setVisible}
                 hideDialog={hideDialog}
                 productId={id}
                 />
            </TouchableOpacity>
            </View>
          </View>
        )
      }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
backgroundContainer:{
  backgroundColor:colors.containers,
  marginVertical:"1%",
  flexDirection:'row',
  width: "97%",
  alignSelf:'center',
  padding:"5%",
  borderRadius:25,

},
image:{
  width:"16%",
  height:"60%",
  borderRadius:100,
  marginRight:"5%"
},
textContentView:{
  flexDirection:'column'
},
title:{
fontWeight:'bold',
fontSize:17
},
txt:{
  color:'#4d4d4d'
},
icon:{
  color:"#bfe3bf",
  backgroundColor: colors.greenligth,
  paddingHorizontal:normalize(20),
  paddingVertical:normalize(8),
  borderRadius:30
},
view:{
 position:'absolute',
 top:"35%",
 right:'10%',

}
})

export default List
