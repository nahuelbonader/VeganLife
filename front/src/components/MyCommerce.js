import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { toggleButton } from './customFunctions/funciones'
import { RadioButton } from 'react-native-paper';

const MyCommerce = ({ myImage, myName }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image,setImage] = useState("")
  const [address, setAddress] = useState("")
  const [phone,setPhone] = useState("")
  const [CUIL, setCuil] = useState("")
  const [description, setDescription] = useState("")
  const [productsCategories, setCategories] = useState("")
  const [delivery, setDelivery] = useState(false)

const [checked, setChecked] = React.useState('first');
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [value, setValue] = useState("my_own");

  return (
    <View style={{flex:1, flexDirection: 'column', alignItems:'stretch', backgroundColor:"white"}}>
       <View style={styles.viewUser}>
          <Image style={styles.img} source={{uri:myImage }}/>
          <Text style={styles.text}> {myName} </Text>
       </View>

       <View style={styles.viewOptions}>
          <TouchableOpacity onPress={()=>{ if(!active1) setValue("my_own"),toggleButton(setActive1,setActive1,setActive2,setActive3,active1,active2,active3) }}>
            <Text style={active1? styles.touchActive : styles.touch1} >Mis comercios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ if(!active2) setValue("im_admin"),toggleButton(setActive2,setActive1,setActive2,setActive3,active1,active2,active3) }}>
            <Text style={active2? styles.touchActive : styles.touch1} >Trabajo en</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ if(!active3) setValue("create"),toggleButton(setActive3,setActive1,setActive2,setActive3,active1,active2,active3) }}>
            <Text style={active3? styles.touchActive : styles.touch1} >Crear comercio</Text>
          </TouchableOpacity>
       </View>

       <View style={styles.viewMarkets}>
       {value == "my_own"?
       null
       :
       value == "im_admin"?
       null
       :
       value == "create"?
       <View>
         <View style={styles.row}>
           <TextInput
           style={styles.input}
           placeholder="nombre"
           onChangeText={(text)=>setName(text)}
           value={name}
           />
           <TextInput
           style={styles.input}
           placeholder="email"
           onChangeText={(text)=>setEmail(text)}
           value={email}
           />
         </View>
            <TextInput
              style={styles.inputTwo}
              placeholder="imagen Url"
              onChangeText={(text)=> setImage(text)}
              value={image}
            />
            <TextInput
              style={styles.inputTwo}
              placeholder="Dirección"
              onChangeText={(text)=> setAddress(text)}
              value={address}
            />
             <View style={styles.row}>
                <TextInput
                style={styles.input}
                placeholder="Número de telefono"
                onChangeText={(text)=>setPhone(text)}
                value={phone}
                />
                <TextInput
                style={styles.input}
                placeholder="CUIL"
                onChangeText={(text)=>setCuil(text)}
                value={CUIL}
                />
             </View>
            <TextInput
              style={styles.inputTwo}
              placeholder="Descripción"
              onChangeText={(text)=> setDescription(text)}
              value={description}
            />
            <TextInput
              style={styles.inputTwo}
              placeholder="Categoria de productos"
              onChangeText={(text)=> setCategories(text)}
              value={productsCategories}
            />
             <Text style={styles.midText}>Tenes Delivery?</Text>
             <View style={styles.row}>
             <Text>No</Text>
               <RadioButton
                 value="first"
                 status={ checked === 'first' ? 'checked' : 'unchecked' }
                 onPress={() => {setChecked('first'),setDelivery(false)}}
               />
               <Text>Si</Text>
               <RadioButton
                 value="second"
                 status={ checked === 'second' ? 'checked' : 'unchecked' }
                 onPress={() =>{ setChecked('second'),setDelivery(true)}}
               />
             </View>
             <TouchableOpacity
              style={styles.submit}
             >
               <Text style={styles.textSubmit}>Crear nuevo comercio</Text>
             </TouchableOpacity>
         </View>
       :
       null
       }
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewUser:{
   flex:1.5,
   marginHorizontal:"5%",
   backgroundColor:"#F1F4FB",
   flexDirection:'row',
   borderRadius:35,
   marginTop:"4%"
  },
  viewOptions:{
    flex:0.5,
    marginHorizontal:"5%",
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:"1.5%"
  },
  viewMarkets:{
    flex:7,
    marginHorizontal:"5%",
  },
  img:{
    alignSelf:'center',
    marginHorizontal:"6%",
    width:"15%",
    height:"55%",
    borderRadius:100
  },
  text:{
    color:"green",
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'center'
  },
  touch1:{
    color:"green",
    fontSize:16
  },
  touchActive:{
    color:"#0c7502",
    fontWeight:'bold',
    borderBottomWidth:3,
    borderBottomColor:'green',
    fontSize:17,
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:"#007F37ff",
    width:"45%",
    marginRight:"5%",
    marginTop:"4%"
  },
  row:{
    flexDirection:'row',
    justifyContent:'center'
  },
  inputTwo:{
    borderBottomWidth:1,
    borderBottomColor:"#007F37ff",
    marginTop:"5%"
  },
  midText:{
    alignSelf:'center',
    marginTop:"3%",
    marginBottom:"1%",
    fontSize:17,
    color:'#0c7502',
    fontWeight:'bold'
  },
  submit:{
    alignSelf:'center',
    backgroundColor:'#007F37ff',
    padding:"3%",
    borderRadius:20
  },
  textSubmit:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase'
  }
})

export default MyCommerce
