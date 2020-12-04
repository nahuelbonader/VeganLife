import React, {useState} from "react";
import { Text, View,FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import MaterialChip from "react-native-material-chip"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import OneButton from './OneButton'

const ListSelected = ({textbtn, bool, handleChange, ph, handleBoolean}) => {
 

    const [instruc, setInstruc] = useState([]);    
    const [data, setData] = useState('');

    {if(bool){
        

        return (
            
            <View style={{marginTop: 150}}>   
            <Text style={styles.title}>Ingresa tu propia receta</Text>
          <View style={styles.container}> 

          <TextInput 
            style={styles.input}
            placeholder={ph}
            onChangeText={setData}
            value={data}
            
          />

            <TouchableOpacity 
                onPress={()=>{setInstruc([...instruc, data]), setData("")}}
                style={styles.icon}> 
                
                <MaterialIcons name="add" size={25} />
            </TouchableOpacity>
            </View>
            <FlatList
        
        data={instruc}
        renderItem={({ item, index }) => (
            
          <View>  
            {/* <Text >{index+1}. {item}</Text> */}


            <MaterialChip
             text={index+1  + ". " + item}
             onPress={() => console.log('press')}
             onDelete={() => console.log('delete')}
             style={{borderStartColor: "green", borderTopColor: "green", borderBottomColor: "green", borderEndColor: "green"}}
             //style={{borderColor:"green"}}
             rightIcon={
               <View
                   style={{
                       height: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                       width: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                    borderRadius: MaterialChip.CHIP_RIGHT_ICON_RADIUS,
                      //backgroundColor: 'black',
                       borderWidth: 0,
                      default: true
                 }}
                  ><MaterialCommunityIcons name="close-circle-outline" size={20} /></View>}
            />


          </View>
        )}
        keyExtractor={(index) => index}
        
        />

           
            <TouchableOpacity 
                onPress={()=>{handleChange(instruc), handleBoolean()}}
                  style={styles.boton}> 
                
                  <Text>{textbtn}</Text>
            </TouchableOpacity>
    
            </View>
 
    
             );

    }else{
        return null
    }}
    
   }

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 100,
      flexDirection: "row",
      marginBottom: 20,

    },
    title:{
      fontSize:20,
      textAlign: "center",
      fontWeight: "bold"
    },
    input:{
      //backgroundColor: '#000000',
      fontSize: 20, 
      borderBottomColor: "#35b056",
      borderBottomWidth: 2,
      marginTop: 25,
      padding: 10 ,
      marginHorizontal: 10
    },
    boton: {
      marginTop: 75,
      alignItems: "center",
      backgroundColor: "#35b056",
      padding: 20,
      borderRadius: 20,
      marginHorizontal: 75
    },
    icon:{
      alignItems: "flex-end",
      marginTop: 25

    },
  }
    
    )


 export default ListSelected;