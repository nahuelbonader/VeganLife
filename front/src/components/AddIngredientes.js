import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";

import OneButton from './OneButton'

const AddIngredientes = ({textbtn, bool, handleChange, ph, handleBoolean}) => {
 
    const [quantity, setQuantity] = useState(''); 
    const [ingredient, setIngredient] = useState('');    
    const [data, setData] = useState([]);

    {if(bool){
        

        return (
            
            <View style={{marginTop: 150}}>   
            <Text style={styles.title}>Ingresa tu propia receta</Text>
          <View>


          <TextInput 
            style={styles.input}
            placeholder={"unidad de medida"}
            onChangeText={setQuantity}
            value={quantity}
            
          />
          <TextInput 
            style={styles.input}
            placeholder={"ingredientes"}
            onChangeText={setIngredient}
            value={ingredient}
            
          />


            <TouchableOpacity 
                onPress={()=>{setData([...data, {quantity, ingredient}]), setQuantity(""), setIngredient("")}}
                style={{marginTop: 100}}> 
                
                <Text>Agregar</Text>
            </TouchableOpacity>
            </View>
            <FlatList
        
        data={data}
        renderItem={({ item, index }) => (
            
          <View>  
            <Text > {item.quantity} de {item.ingredient}</Text>
            
          </View>
        )}
        keyExtractor={(index) => index}
        
        />

           
            <TouchableOpacity 
                onPress={()=>{handleChange(data), handleBoolean()}}
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


 export default AddIngredientes;
