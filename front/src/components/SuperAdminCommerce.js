import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import colors from "../styles/colors"
import List from './AdminsList'

const SuperAdminConfigs = ({ input, setInput, handleSubmit, admins, handleDelete, errMessage }) => {
  return(
     <View style={{flex:1,}}>
        <View style={styles.firstView}>
          <Text style={styles.text}>¿Querés agregar un Admin a tu comercio?</Text>
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
          <Text style={styles.err}>{errMessage}</Text>
        </View>
        <View style={styles.secondView}>
           <Text style={styles.txt2}>Lista de admins</Text>
             <View style={{backgroundColor:colors.container}}>
               <List data={admins} handleDelete={handleDelete}/>
             </View>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
  firstView:{
    flex:4
  },
  secondView:{
    flex:6,
    paddingBottom:'10%',
    backgroundColor:colors.background,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
text:{
  alignSelf:'center',
  fontWeight:'bold',
  fontSize:20,
  color:colors.font,
  marginVertical:'6%'
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
marginVertical:'3%',
marginLeft:'5%'
},
err:{
  fontWeight:'bold',
  color:'red',
  alignSelf:'center',
  fontSize:20
}
})

export default SuperAdminConfigs
