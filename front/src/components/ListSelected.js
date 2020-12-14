import React, {useState} from "react";
import { Text, View,FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import MaterialChip from "react-native-material-chip"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ListSelected = ({textbtn, bool, handleChange, ph, handleBoolean, textbtn2, handleBackBoolean}) => {
 
    const [instruc, setInstruc] = useState([]);    
    const [data, setData] = useState('');

    const deleteInstruc = (input) => {
      setInstruc(instruc.filter((e) => e !== input));
    };

    {if(bool){
        

        return (
            
            <View style={{marginTop: 100}}>   
            <Text style={styles.title}>Ingresa tu propia receta</Text>
          <View style={styles.container}> 
            <View style={styles.container}> 
            <TextInput 
              style={styles.input}
              placeholder={ph}
              onChangeText={setData}
              value={data}
              multiline
              
            />

              <TouchableOpacity 
                  onPress={()=>{setInstruc([...instruc, data]), setData("")}}
                  style={styles.icon}> 
                  
                  <MaterialIcons name="add" size={25} />
              </TouchableOpacity>
              </View>
            </View>
            <FlatList
        
        data={instruc}
        renderItem={({ item, index }) => (
            
          <View
          style={{flex:1}}
          >  
            <MaterialChip
             text={index+1  + ". " + item}
             onDelete={() => deleteInstruc(item)}
             style={styles.chip}
             rightIcon={
               <View
                   style={{
                       height: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                       width: MaterialChip.CHIP_RIGHT_ICON_SIZE,
                       borderRadius: MaterialChip.CHIP_RIGHT_ICON_RADIUS,
                       borderWidth: 0,
                      default: true,
                      marginHorizontal: 5,
                      maxWidth: 100
                      
                 }}
                  ><MaterialCommunityIcons name="close-circle-outline" size={20} /></View>}
            />


          </View>
        )}
        keyExtractor={(index) => index}
        
        />

            <TouchableOpacity 
                onPress={()=>{handleBackBoolean()}}
                  style={styles.boton}> 
                
                  <Text style={styles.title}>{textbtn2}</Text>
            </TouchableOpacity>
           
            <TouchableOpacity 
                onPress={()=>{handleChange(instruc), handleBoolean()}}
                  style={styles.boton}> 
                
                  <Text style={styles.title}>{textbtn}</Text>
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
      marginHorizontal:10

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
      //marginTop: 25,
      padding: 10 ,
      marginHorizontal: 10,
      flex: 6
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
      marginTop: 25,
      flex: 2

    },
    chip: {
      flex: 1,
      borderStartColor: "green", 
      borderTopColor: "green", 
      borderBottomColor: "green", 
      borderEndColor: "green",

    }
  }
    
    )


 export default ListSelected;