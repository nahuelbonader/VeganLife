import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

import MaterialChip from "react-native-material-chip"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-material-dropdown';


import OneButton from './OneButton'

const InputSelected = ({ textbtn, bool, ph, handleChange, handleBoolean, categories }) => {

    let data = []
      { if(bool){

        for(let i =0; i<categories.length; i++){
            data.push({value: categories[i].name})
        }

        return (

        <View style={{marginTop: 100}}>

          <Text style={styles.title}>Ingresa tu propia receta</Text>
          <Dropdown
          onChangeText={(value)=>handleChange(value) }
          label={"elegi tu categoria"}
          data={data}
          />

          <OneButton 
            handleBoolean={handleBoolean}
            textbtn={textbtn}
            />
          </View>
)
      }else{
        return null
      }
    }     
  };
  
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
    }
  });
  
  export default InputSelected;
  

  