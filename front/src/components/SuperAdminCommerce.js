import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import colors from "../styles/colors"
import List from './AdminsList'

const SuperAdminConfigs = ({ input, setInput, handleSubmit, admins }) => {
  return(
     <View style={{flex:1}}>
        <View style={{ flex:4}}>
          <Text style={styles.text}>¿Queres agregar un Admin a tu comercio?</Text>
          <Text style={styles.txt}>Ingresa el correo de la persona</Text>
          <TextInput
          autoCapitalize="none"
          placeholder="email"
          value={input}
          onChangeText={(text)=> setInput(text)}
          style={styles.input}
          />
          <TouchableOpacity
          onPress={handleSubmit}
          style={styles.button}
          >
            <Text style={styles.buttonText}> Crear admin </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex:6}}>
           <Text style={styles.txt2}>Lista de admins</Text>
             <View style={{backgroundColor:colors.background}}>
               <List data={admins}/>
             </View>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
text:{
  alignSelf:'center',
  fontWeight:'bold',
  fontSize:20,
  color:colors.font,
  marginVertical:'10%'
},
txt:{
  alignSelf:'center',
  fontWeight:'bold',
  color:colors.font,
  fontSize:19,
},
input:{
  marginHorizontal:'15%',
  borderBottomWidth:2,
  borderBottomColor: colors.carrot,
  marginTop:'5%',
  marginVertical: '5%'
},
button:{
  backgroundColor:colors.button,
  width:'50%',
  height:'20%',
  alignSelf:'center',
  justifyContent:'center',
  borderRadius:30
},
buttonText:{
  alignSelf:'center',
  fontWeight:'bold',
  color:colors.background,
  fontSize:18,
  textTransform:'uppercase'
},
txt2:{
fontSize:18,
color:colors.font,
fontWeight:'bold',
marginVertical:'3%'
}
})

export default SuperAdminConfigs
