import React, { useState, useEffect} from 'react';
import { View,ScrollView,TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';
import { Button,RadioButton  } from 'react-native-paper';
import colors from "../styles/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import API from '../api/api'
import { useDispatch } from "react-redux";
import { fetchProducts } from '../store/actions/products'

const DialogEdit = ({ visible, setVisible, hideDialog, productId}) => {

 const dispatch = useDispatch()
 const [title ,setTitle] = useState("")
 const [price ,setPrice] = useState("")
 const [image ,setImage] = useState("")
 const [categoryStore ,setCategory] = useState("")
 const [description ,setDescription] = useState("")
 const [stock ,setStock] = useState("")
 const [available, setAvailable] = useState("")
 const [checked, setChecked] = React.useState('first');


  useEffect(()=>{
    let mounted = true
    if(mounted){
    API.get(`/products/${productId}`)
       .then(res=> res.data)
       .then((data)=>{
         setTitle(data.title)
         setPrice(data.price.toString())
         setImage(data.image)
         setCategory(data.categoryStore)
         setDescription(data.description)
         setStock(data.stock.toString())
         setAvailable(data.available)
         if(!data.available) setChecked('second')
       })
       .catch(err=>console.log(err))}
     mounted = false

  },[productId])

  const handleSubmit = () => {
    API.put(`/products/${productId}`,{
      title,
      price,
      image,
      categoryStore,
      description,
      stock,
      available,
      checked,
    })
    .then(res=>res.data)
    .then(()=> {
      setVisible(false)
      dispatch(fetchProducts())
    })
    .catch(err=> console.log(err))
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea>
        <Dialog.Title>
          <MaterialCommunityIcons
            name="pencil"
            size={35}
            color="black"
          />
        </Dialog.Title>
          <ScrollView contentContainerStyle={{paddingHorizontal: "3%",marginTop:"10%"}}>
            <View style={styles.row}>
                 <TextInput
                    style={styles.inputNombre}
                    value={title}
                    placeholder="nombre"
                    onChangeText={(text)=>setTitle(text)}
                 />
                 <Text style={styles.txt}>$ </Text>
                 <TextInput
                   value={price}
                   style={styles.inputPrecio}
                  placeholder="000000"
                  onChangeText={(text)=>setPrice(text)}
                 />
              </View>
               <View>
                  <TextInput
                  value={image}
                    style={styles.inputColumn}
                   placeholder="imagen Url"
                   onChangeText={(text)=>setImage(text)}
                  />
                  <TextInput
                  value={categoryStore}
                    style={styles.inputColumn}
                   placeholder="Categoria"
                   onChangeText={(text)=> setCategory(text)}
                  />
                  <TextInput
                  value={description}
                    style={styles.inputColumn}
                   placeholder="Descripción"
                   onChangeText={(text)=>setDescription(text)}
                  />
                   <View style={styles.row}>
                   <Text style={styles.txt2}> Disponibles en Stock:    </Text>
                     <TextInput
                     value={stock}
                       style={styles.inputPrecio}
                       placeholder="000000"
                       onChangeText={(text)=> setStock(text)}
                     />
                   </View>
                   <Text style={styles.txt3}>¿Sigue disponible?</Text>
                   <View style={styles.row2}>
                   <Text>Si</Text>
                     <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() =>{
                          setAvailable(true)
                           setChecked('first')
                         }}
                      />
                      <Text>No</Text>
                      <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() =>{
                          setAvailable(false)
                           setChecked('second')
                         }}
                      />
                   </View>
               </View>
          <Dialog.Actions>
          <View style={styles.row}>
             <View style={styles.exit}>
               <Button  color={colors.carrot} onPress={() => setVisible(false)}>salir</Button>
             </View>
             <View style={ styles.edit}>
               <Button color={colors.greenligth} onPress={handleSubmit}>editar</Button>
             </View>
           </View>
          </Dialog.Actions>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
 inputRow:{
   borderBottomColor: colors.dartmouthGreen,
   borderBottomWidth: 1,
   width:"50%",
   marginRight:"5%"
 },
 inputColumn:{
   borderBottomColor: colors.dartmouthGreen,
   borderBottomWidth: 1,
   marginVertical:"5%"
 },
 inputNombre:{
   borderBottomColor: colors.dartmouthGreen,
   borderBottomWidth: 1,
   width:"70%",
   marginRight:"5%",

 },
 inputPrecio:{
   borderBottomColor: colors.dartmouthGreen,
   borderBottomWidth: 1,
   width:"20%",
 },
 txt:{
   alignSelf:'center',
   fontWeight:'bold'
 },
 txt2:{
   alignSelf:'flex-end',
   fontWeight:'bold'
 },
 row:{
   flexDirection:'row'
 },
 row2:{
   flexDirection:'row',
   alignSelf:'center',
   marginBottom:'10%'
 },
 txt3:{
   alignSelf:'center',
   fontWeight:'bold',
   marginTop:'8%'
 },
 exit:{
   right:'300%',
   borderBottomWidth:1,
   borderBottomColor:colors.carrot
 },
 edit:{
   borderBottomWidth:1,
   borderBottomColor:colors.greenligth
 }
})

export default DialogEdit;
