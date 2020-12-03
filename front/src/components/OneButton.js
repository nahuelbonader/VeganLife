import React from "react";
import { Text, TouchableOpacity } from "react-native";


const OneButton = ({ handleBoolean, textbtn }) => {
  
          return (
  
            <TouchableOpacity 
              onPress={()=>handleBoolean()}
              style={{marginTop: 100}}> 
              <Text>{textbtn}</Text>
            </TouchableOpacity>
          )
    };
    

    
    export default OneButton;
    
  
    