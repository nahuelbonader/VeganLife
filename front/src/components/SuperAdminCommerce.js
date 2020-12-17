import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import colors from "../styles/colors"
import List from './AdminsList'
import normalize from "react-native-normalize";

const SuperAdminConfigs = ({ input, setInput, handleSubmit, admins, handleDelete, errMessage }) => {
  return(
     <View style={{flex:1,}}>
        <View style={styles.firstView}>
          <Text style={styles.text}>¿Querés agregar un Admin?</Text>
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
           <Text style={admins.length > 0 ? styles.txt2 : styles.txt2Carrot}>Lista de admins</Text>
           <View style={styles.line}></View>
             <View style={{backgroundColor:colors.container}}>
             { admins.length > 0?
                 <List data={admins} handleDelete={handleDelete}/>
               :
               <Text style={styles.defaultMessage}>No agregaste administradores</Text>
             }

             </View>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
  firstView:{
    flex:4.5
  },
  secondView:{
    flex:5.5,
    paddingBottom:'10%',
    backgroundColor:colors.background,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  line:{
    backgroundColor: colors.lightGrey,
    height:1
  },
text:{
  alignSelf:'center',
  fontWeight:'bold',
  fontSize:normalize(20),
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
fontSize:normalize(20),
color:colors.font,
fontWeight:'bold',
marginVertical:'3%',
marginLeft:'5%'
},
txt2Carrot:{
fontSize:normalize(20),
color:colors.carrot,
fontWeight:'bold',
marginVertical:'3%',
marginLeft:'5%'
},

err:{
  fontWeight:'bold',
  color:'red',
  alignSelf:'center',
  fontSize:20,
},
defaultMessage:{
  alignSelf:'center',
  color:"#bfbfbf",
  fontSize:20,
  marginTop:'35%'
}
})

export default SuperAdminConfigs
