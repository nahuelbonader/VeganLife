import React, { useState, useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet} from "react-native";
import { userIcon } from "../utils/constants";
import colors from "../styles/colors"
import { toggleButton } from './customFunctions/funciones'

import ProductsList from './ProductsList'


const Panel = ({ info, products }) => {


  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [value, setValue] = useState("products");


  return (
    <View style={{flex: 1, backgroundColor:colors.background}}>
      <View style={styles.viewUser}>
         <Image style={styles.img} source={{uri: info.image? info.image : userIcon }}/>
         <Text style={styles.name}> {info.name} </Text>
      </View>

      <View style={styles.viewOptions}>
         <TouchableOpacity onPress={()=>{ if(!active1) setValue("products"),toggleButton(setActive1,setActive1,setActive2,setActive3,active1,active2,active3) }}>
           <Text style={active1? styles.touchActive : styles.touch1} >Mis Productos</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{ if(!active2) setValue("sales"),toggleButton(setActive2,setActive1,setActive2,setActive3,active1,active2,active3) }}>
           <Text style={active2? styles.touchActive : styles.touch1} >Mis Ventas</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{ if(!active3) setValue("categories"),toggleButton(setActive3,setActive1,setActive2,setActive3,active1,active2,active3) }}>
           <Text style={active3? styles.touchActive : styles.touch1} >Categorias</Text>
         </TouchableOpacity>
      </View>

      <View style={styles.viewContent}>
      {value == 'products'?
      <View>
        <ProductsList
        data={products}
        />

      </View>
      :
      value == 'sales'?
      null
      :
      value == 'categories'?
      null
      :
      null
      }
      </View>
      {value == 'products'?
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Añadir nuevo producto</Text>
      </TouchableOpacity>
        :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  viewUser:{
    flex:1.5,
    marginHorizontal:"5%",
    backgroundColor: colors.containers,
    flexDirection:'row',
    borderRadius:35,
    marginTop:"4%"
  },
  img:{
    alignSelf:'center',
    marginHorizontal:"6%",
    width:"15%",
    height:"55%",
    borderRadius:100
  },
  name:{
    color:"green",
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'center'
  },
  viewOptions:{
    flex:0.5,
    marginHorizontal:"5%",
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:"1.5%"
  },
  viewContent:{
    flex:7,
    marginHorizontal:"3%",
  },
  touch1:{
    color:"#85D4A6",
    fontSize:16,
    fontWeight:'bold'
  },
  touchActive:{
    color: colors.darkGreen,
    fontWeight:'bold',
    borderBottomWidth:3,
    borderBottomColor:'green',
    fontSize:17,
  },
  button:{
    position:'absolute',
    alignSelf:'center',
    bottom:"6%",
    backgroundColor: colors.darkGreen,
    paddingHorizontal:"15%",
    paddingVertical:"1%",
    borderRadius:30
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"#86D3A6"
  }
})


export default Panel
