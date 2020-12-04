import React, {useState} from "react";
import { Text, View,FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import OneButton from './OneButton'

const ListSelected = ({textbtn, bool, handleChange, ph, handleBoolean}) => {
 

    const [instruc, setInstruc] = useState([]);    
    const [data, setData] = useState('');

    console.log("STATE", instruc, data)

    {if(bool){
        

        return (
            
            <View style={{marginTop: 150}}>   
            <Text style={styles.title}>Ingresa tu propia receta</Text>
          <View>


          <TextInput 
            style={styles.input}
            placeholder={ph}
            onChangeText={setData}
            value={data}
            
          />

            <TouchableOpacity 
                onPress={()=>{setInstruc([...instruc, data]), setData("")}}
                style={{marginTop: 100}}> 
                
                <Text>Agregar</Text>
            </TouchableOpacity>
            </View>
            <FlatList
        
        data={instruc}
        renderItem={({ item, index }) => (
            
          <View>  
            <Text >{index+1}. {item}</Text>
          </View>
        )}
        keyExtractor={(index) => index}
        
        />

           
            <TouchableOpacity 
                onPress={()=>{handleChange(instruc), handleBoolean()}}
                  style={{marginTop: 100}}> 
                
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
      marginTop: 100
    },
    title:{
      fontSize:20,
      textAlign: "center"
    },
    input:{
      //backgroundColor: '#000000',
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      marginTop: 25,
      marginHorizontal: 40
    }}
    
    )


 export default ListSelected;