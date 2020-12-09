import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet} from 'react-native'
import { toggleButton } from './customFunctions/funciones'
import { RadioButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import useInputs from '../hooks/useInputs2'
import API from '../api/api'

import Input from './InputHorario'

const MyCommerce = ({ myImage, myName, userId }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image,setImage] = useState("")
  const [address, setAddress] = useState("")
  const [phone,setPhone] = useState("")
  const [CUIL, setCuil] = useState("")
  const [description, setDescription] = useState("")
  const [productsCategories, setCategories] = useState("")
  const [delivery, setDelivery] = useState(false)
  const [message, setMessage] = useState("")
  const [checked, setChecked] = React.useState('first');

  const [checked2, setChecked2] = useState('first')
  const [checked3, setChecked3] = useState('first')
  const [checked4, setChecked4] = useState('first')
  const [checked5, setChecked5] = useState('first')
  const [checked6, setChecked6] = useState('first')
  const [checked7, setChecked7] = useState('first')
  const [checked8, setChecked8] = useState('first')

  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [value, setValue] = useState("my_own");
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(false)

  const [open1,setOpen1] = useState(false)
  const [open2,setOpen2] = useState(false)
  const [open3,setOpen3] = useState(false)
  const [open4,setOpen4] = useState(false)
  const [open5,setOpen5] = useState(false)
  const [open6,setOpen6] = useState(false)
  const [open7,setOpen7] = useState(false)

  const [inputs, handleChange] = useInputs()
  const {
    domingoAm1,
    domingoAm2,
    domingoPm1,
    domingoPm2,
    domingoAm1c,
    domingoAm2c,
    domingoPm1c,
    domingoPm2c,
    lunesAm1,
    lunesAm2,
    lunesPm1,
    lunesPm2,
    lunesAm1c,
    lunesAm2c,
    lunesPm1c,
    lunesPm2c,
    martesAm1,
    martesAm2,
    martesPm1,
    martesPm2,
    martesAm1c,
    martesAm2c,
    martesPm1c,
    martesPm2c,
    miercolesAm1,
    miercolesAm2,
    miercolesPm1,
    miercolesPm2,
    miercolesAm1c,
    miercolesAm2c,
    miercolesPm1c,
    miercolesPm2c,
    juevesAm1,
    juevesAm2,
    juevesPm1,
    juevesPm2,
    juevesAm1c,
    juevesAm2c,
    juevesPm1c,
    juevesPm2c,
    viernesAm1,
    viernesAm2,
    viernesPm1,
    viernesPm2,
    viernesAm1c,
    viernesAm2c,
    viernesPm1c,
    viernesPm2c,
    sabadoAm1,
    sabadoAm2,
    sabadoPm1,
    sabadoPm2,
    sabadoAm1c,
    sabadoAm2c,
    sabadoPm1c,
    sabadoPm2c,
  } = inputs

  const goNext = () => {
    setFirst(!first)
    setSecond(!second)
  }
console.log("MIERCOLES, DESDE:",`${miercolesAm1}:${miercolesAm2}`,"HASTA:",`${miercolesAm1c}:${miercolesAm2c}` );
  const handleSubmit= () => {
  const daysOpen = [
    {open:open1,startMorning: `${domingoAm1}:${domingoAm2}`,endMorning:`${domingoAm1c}:${domingoAm2c}`,startNoon: `${domingoPm1}:${domingoPm2}`,endNoon: `${domingoPm1c}:${domingoPm2c}`},
    {open:open2,startMorning: `${lunesAm1}:${lunesAm2}`,endMorning:`${lunesAm1c}:${lunesAm2c}` ,startNoon:`${lunesPm1}:${lunesPm2}` ,endNoon:`${lunesPm1c}:${lunesPm2c}` },
    {open:open3,startMorning: `${martesAm1}:${martesAm2}`,endMorning: `${martesAm1c}:${martesAm2c}`,startNoon:`${martesPm1}:${martesPm2}` ,endNoon: `${martesPm1c}:${martesPm2c}`},
    {open:open4,startMorning:`${miercolesAm1}:${miercolesAm2}` ,endMorning: `${miercolesAm1c}:${miercolesAm2c}`,startNoon:`${miercolesPm1}:${miercolesPm2}` ,endNoon: `${miercolesPm1c}:${miercolesPm2c}`},
    {open:open5,startMorning: `${juevesAm1}:${juevesAm2}`,endMorning: `${juevesAm1c}:${juevesAm2c}`,startNoon: `${juevesPm1}:${juevesPm2}`,endNoon:`${juevesPm1c}:${juevesPm2c}`},
    {open:open6,startMorning:`${viernesAm1}:${viernesAm2}` ,endMorning:`${viernesAm1c}:${viernesAm2c}`,startNoon:`${viernesPm1}:${viernesPm2}` ,endNoon: `${viernesPm1c}:${viernesPm2c}`},
    {open:open7,startMorning: `${sabadoAm1}:${sabadoAm2}`,endMorning: `${sabadoAm1c}:${sabadoAm2c}`,startNoon: `${sabadoPm1}:${sabadoPm2}`,endNoon:`${sabadoPm1c}:${sabadoPm2c}`}
  ]

      API.post("/stores",{
        superAdmin: userId,
        name,
        email,
        image,
        address,
        phone,
        CUIL,
        description,
        productsCategories,
        delivery,
        open: daysOpen
      })
        .then((res)=> res.data)
        .then((data)=> setMessage("Creado Satisfactoriamente :)"))
        .catch(err=> setMessage("Lo sentimos, hubo un problema :("))

        setTimeout(function(){ setMessage("") }, 6000)
    }


  return (
    <View style={{flex:1, flexDirection: 'column', alignItems:'stretch', backgroundColor:"white"}}>
       <View style={styles.viewUser}>
          <Image style={styles.img} source={{uri:myImage }}/>
          {message.length != 0 ?
          <Text style={message.length == 28 ? styles.text: styles.errorMessage }>{message}</Text>
            :
          <Text style={styles.text}> {myName} </Text>
          }
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
       value == "create" && first?
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
             <Text style={styles.midText}>¿Tenes Delivery?</Text>
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
              onPress={goNext}
             >
               <Text style={styles.textSubmit}>Siguiente</Text>
             </TouchableOpacity>
         </View>
       :
       second?
       <View>
          <View style={{flexDirection:'row',marginVertical:"1%"}}>
            <TouchableOpacity
             style={styles.goBack}
             onPress={goNext}
            >
              <MaterialIcons style={styles.IconStyle} name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.submit}
             onPress={handleSubmit}
            ><Text style={styles.textSubmit}>CREAR</Text></TouchableOpacity>
          </View>
          <ScrollView>
          <Text style={styles.text}>¿Que días abris?</Text>
            <Input
            open={open1}
            checked={checked2}
            setChecked={setChecked2}
            setOpen={setOpen1}
            dia={"Domingo"}
            text1={domingoAm1}
            text2={domingoAm2}
            text3={domingoPm1}
            text4={domingoPm2}
            text1c={domingoAm1c}
            text2c={domingoAm2c}
            text3c={domingoPm1c}
            text4c={domingoPm2c}
            handleChange1={handleChange("domingoAm1")}
            handleChange2={handleChange("domingoAm2")}
            handleChange3={handleChange("domingoPm1")}
            handleChange4={handleChange("domingoPm2")}
            handleChange1c={handleChange("domingoAm1c")}
            handleChange2c={handleChange("domingoAm2c")}
            handleChange3c={handleChange("domingoPm1c")}
            handleChange4c={handleChange("domingoPm2c")}
            />

            <Input
            open={open2}
            checked={checked3}
            setChecked={setChecked3}
            setOpen={setOpen2}
            dia={"Lunes"}
            text1={lunesAm1}
            text2={lunesAm2}
            text3={lunesPm1}
            text4={lunesPm2}
            text1c={lunesAm1c}
            text2c={lunesAm2c}
            text3c={lunesPm1c}
            text4c={lunesPm2c}
            handleChange1={handleChange("lunesAm1")}
            handleChange2={handleChange("lunesAm2")}
            handleChange3={handleChange("lunesPm1")}
            handleChange4={handleChange("lunesPm2")}
            handleChange1c={handleChange("lunesAm1c")}
            handleChange2c={handleChange("lunesAm2c")}
            handleChange3c={handleChange("lunesPm1c")}
            handleChange4c={handleChange("lunesPm2c")}
            />

            <Input
            open={open3}
            checked={checked4}
            setChecked={setChecked4}
            setOpen={setOpen3}
            dia={"Martes"}
            text1={martesAm1}
            text2={martesAm2}
            text3={martesPm1}
            text4={martesPm2}
            text1c={martesAm1c}
            text2c={martesAm2c}
            text3c={martesPm1c}
            text4c={martesPm2c}
            handleChange1={handleChange("martesAm1")}
            handleChange2={handleChange("martesAm2")}
            handleChange3={handleChange("martesPm1")}
            handleChange4={handleChange("martesPm2")}
            handleChange1c={handleChange("martesAm1c")}
            handleChange2c={handleChange("martesAm2c")}
            handleChange3c={handleChange("martesPm1c")}
            handleChange4c={handleChange("martesPm2c")}
            />

            <Input
            open={open4}
            checked={checked5}
            setChecked={setChecked5}
            setOpen={setOpen4}
            dia={"Miercoles"}
            text1={miercolesAm1}
            text2={miercolesAm2}
            text3={miercolesPm1}
            text4={miercolesPm2}

            text1c={miercolesAm1c}
            text2c={miercolesAm2c}
            text3c={miercolesPm1c}
            text4c={miercolesPm2c}
            handleChange1={handleChange("miercolesAm1")}
            handleChange2={handleChange("miercolesAm2")}
            handleChange3={handleChange("miercolesPm1")}
            handleChange4={handleChange("miercolesPm2")}

            handleChange1c={handleChange("miercolesAm1c")}
            handleChange2c={handleChange("miercolesAm2c")}
            handleChange3c={handleChange("miercolesPm1c")}
            handleChange4c={handleChange("miercolesPm2c")}
            />

            <Input
            open={open5}
            checked={checked6}
            setChecked={setChecked6}
            setOpen={setOpen5}
            dia={"Jueves"}
            text1={juevesAm1}
            text2={juevesAm2}
            text3={juevesPm1}
            text4={juevesPm2}

            text1c={juevesAm1c}
            text2c={juevesAm2c}
            text3c={juevesPm1c}
            text4c={juevesPm2c}
            handleChange1={handleChange("juevesAm1")}
            handleChange2={handleChange("juevesAm2")}
            handleChange3={handleChange("juevesPm1")}
            handleChange4={handleChange("juevesPm2")}

            handleChange1c={handleChange("juevesAm1c")}
            handleChange2c={handleChange("juevesAm2c")}
            handleChange3c={handleChange("juevesPm1c")}
            handleChange4c={handleChange("juevesPm2c")}
            />

            <Input
            open={open6}
            checked={checked7}
            setChecked={setChecked7}
            setOpen={setOpen6}
            dia={"Viernes"}
            text1={viernesAm1}
            text2={viernesAm2}
            text3={viernesPm1}
            text4={viernesPm2}

            text1c={viernesAm1c}
            text2c={viernesAm2c}
            text3c={viernesPm1c}
            text4c={viernesPm2c}
            handleChange1={handleChange("viernesAm1")}
            handleChange2={handleChange("viernesAm2")}
            handleChange3={handleChange("viernesPm1")}
            handleChange4={handleChange("viernesPm2")}

            handleChange1c={handleChange("viernesAm1c")}
            handleChange2c={handleChange("viernesAm2c")}
            handleChange3c={handleChange("viernesPm1c")}
            handleChange4c={handleChange("viernesPm2c")}
            />
            <Input
            open={open7}
            checked={checked8}
            setChecked={setChecked8}
            setOpen={setOpen7}
            dia={"Sabado"}
            text1={sabadoAm1}
            text2={sabadoAm2}
            text3={sabadoPm1}
            text4={sabadoPm2}

            text1c={sabadoAm1c}
            text2c={sabadoAm2c}
            text3c={sabadoPm1c}
            text4c={sabadoPm2c}
            handleChange1={handleChange("sabadoAm1")}
            handleChange2={handleChange("sabadoAm2")}
            handleChange3={handleChange("sabadoPm1")}
            handleChange4={handleChange("sabadoPm2")}

            handleChange1c={handleChange("sabadoAm1c")}
            handleChange2c={handleChange("sabadoAm2c")}
            handleChange3c={handleChange("sabadoPm1c")}
            handleChange4c={handleChange("sabadoPm2c")}
            />
            </ScrollView>

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
  },
  message:{

  },
  errorMessage:{
    color:"red",
    fontWeight:'bold',
    fontSize:17,
    alignSelf:'center'
  },
  goBack:{
    flexDirection:'row',
    alignSelf:'flex-start',
    backgroundColor:'#007F37ff',
    padding:"1%",
    borderRadius:20,
    marginRight:"70%"
  },
  IconStyle:{
    margin:5,
    color:'white',
  }
})

export default MyCommerce
