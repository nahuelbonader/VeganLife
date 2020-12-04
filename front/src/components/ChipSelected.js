import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import ReactNativeChipInput from 'react-native-chip-input';
// BORRARRRR  import ChipInput from "material-ui-chip-input";
import ReactChipsInput from 'react-native-chips';
import MaterialChip from "react-native-material-chip"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OneButton from './OneButton'

const ChipSelected = ({textbtn, bool, handleChange, ph, handleBoolean}) => {
 
    let arr = []
    
    {if(bool){
        

        return (
            //   <ReactNativeChipInput
            //     variant="contained"
            //     inputVarint="outlined"
            //     showChipIcon={true}
            //     chipIconAction={e => console.log(e)}
            //     label="Ingredientes"
            //     placeholder="Ingresa uno a uno los ingredientes"
            //     primaryColor="#1976d2"
            //     secondaryColor="#ffffff"
            //     autoCapitalize="none"
            //     autoCorrect={false}
            //     autoFocus={true}
            //   />
            <View style={{marginTop: 150}}>
            < ReactChipsInput 
        label="Ingresa uno a uno los ingredientes" 
        initialChips={[]} 
        onChangeChips={(chips) => {arr = chips}}
        alertRequired={false} 
        chipStyle={{ borderColor: 'green', backgroundColor: 'white' }} 
        inputStyle={{fontSize: 22}} 
        labelStyle={{ color: 'grey'}} 
        labelOnBlur={{ color: '#666' }} 
        />
    
            <TouchableOpacity 
                onPress={()=>{handleChange(arr), handleBoolean()}}
                  style={{marginTop: 100}}> 
                
                  <Text>{textbtn}</Text>
            </TouchableOpacity>
    
            </View>
    
            //  <MaterialChip
            // text="Example"
            // onPress={() => console.log('press')}
            // onDelete={() => console.log('delete')}
            // style={{borderStartColor: "green", borderTopColor: "green", borderBottomColor: "green", borderEndColor: "green"}}
            // //style={{borderColor:"green"}}
            // rightIcon={
            //   <View
            //       style={{
            //           height: MaterialChip.CHIP_RIGHT_ICON_SIZE,
            //           width: MaterialChip.CHIP_RIGHT_ICON_SIZE,
            //           borderRadius: MaterialChip.CHIP_RIGHT_ICON_RADIUS,
            //           //backgroundColor: 'black',
            //           borderWidth: 0,
            //           default: true
            //       }}
            //       ><MaterialCommunityIcons name="close-circle-outline" size={20} /></View>}
            // /> 
    
             );





    }else{
        return null
    }}
    
   }
 export default ChipSelected;