import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";


const OneButton = ({ handleBoolean, textbtn }) => {
  
          return (
  
            <TouchableOpacity 
              onPress={()=>handleBoolean()}
              style={styles.boton}> 
              <Text style={styles.title}>{textbtn}</Text>
            </TouchableOpacity>
          )
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 100
      },
      title:{
        fontSize:20,
        textAlign: "center",
        fontWeight: "bold"
      },
      input:{
        fontSize: 20, 
        borderBottomColor: "#35b056",
        borderBottomWidth: 2,
        marginTop: 25,
        padding: 10 ,
        marginHorizontal: 40
      },
      boton: {
        marginTop: 75,
        alignItems: "center",
        backgroundColor: "#35b056",
        padding: 20,
        borderRadius: 20,
        marginHorizontal: 75
      }
    });
    
    export default OneButton;
    
  
    