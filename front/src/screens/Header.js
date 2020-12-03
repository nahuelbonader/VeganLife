import React,{useState, useEffect} from 'react';
import { TouchableOpacity, Image, Text,  View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux'
import { ToggleButton } from 'react-native-paper';
import setContent from '../store/actions/searchContent'
import setParam from '../store/actions/searchParam'

import API from '../api/api'

import SearchBar from '../components/SearchBar'

const Header = ({ scene, previous }) => {
  String.prototype.capitalize = function() {
    return this.replace(/^\w/, (c) => c.toUpperCase())
  };
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  const currentRoute = useSelector(state=> state.bottomRouteReducer)
  const [term, setTerm] = useState("")
  const [value,setValue] = useState("recipes") //Parametro a buscar
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  const [active4, setActive4] = useState(false)
  const [search, setSearch] = useState([])

useEffect(()=>{
dispatch(setContent(search))
dispatch(setParam(value))
},[search])

  const handlePress = (fn) => { //Funcion para presionar botones y quitar estilos
    if(fn == setActive1 ){
      fn(!active1)
      if (active2) setActive2(false)
      if (active3) setActive3(false)
      if (active4) setActive4(false)
    }
    if(fn == setActive2){
      fn(!active2)
      if (active1) setActive1(false)
      if (active3) setActive3(false)
      if (active4) setActive4(false)
    }
    if(fn == setActive3){
      fn(!active3)
      if (active1) setActive1(false)
      if (active2) setActive2(false)
      if (active4) setActive4(false)
    }
    if(fn == setActive4){
      fn(!active4)
      if (active1) setActive1(false)
      if (active2) setActive2(false)
      if (active3) setActive3(false)
    }

  }

  const handleSubmit = () => {  //handleSubmit busca si existe coincidencias entre la variable Term y el Title o Name de X obj a buscar
      console.log("value",value);
      if(term == "") return;
   if(value == "recipes"){
       let filter = []
       for (var i = 0; i < recipes.length; i++) {
         recipes[i].title.includes(term.capitalize())?(
            filter.push(recipes[i])
          )
          :
          recipes[i].title.includes(term)?(
            filter.push(recipes[i])
          )
          :null
       }
     setSearch(filter)

   }
    else if (value == "users") {
      API.get("/users")
         .then(res=> res.data)
         .then(data=>{
           setSearch(data.filter(e=> e.name.includes(term)?(
            e.name
           )
           : e.name.includes(term.capitalize())?(
             e.name
           )
           :(
            null
           )))
         })
         .catch(err=>console.log(err))
    }

  }

      return (
    <Appbar.Header style={currentRoute.route == 3?styles.backTwo: styles.back}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}

        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            style={styles.img}
            source={{
              uri:
                'https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/127173750_1804856602996170_7139672927229840697_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=RC7OZjLj0TkAX-Mm1wk&_nc_ht=scontent.ftuc1-1.fna&oh=bfe785883424fcc0b2d1bbdc9f9b88e5&oe=5FE7142A',
            }}
          />
        </TouchableOpacity>
      )}
      <View >
      {
        currentRoute.route == 3?
        <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={handleSubmit}
        />
        :
      <Image
        style={{
          width:"60%",
          height:"90%",
          marginLeft:"50%",

        }}
        source={{
          uri:
            'https://cdn.discordapp.com/attachments/782011623678148618/782011647644270622/VGL1.png',
        }}
      />
      }
      {
        currentRoute.route == 3?
        <View style={styles.view}>
          <TouchableOpacity onPress={()=>{if(!active1)setValue("recipes"),handlePress(setActive1)}}>
            <Text style={active1? styles.touchActive: styles.touch1}>Recetas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{if(!active2)setValue("users"),handlePress(setActive2)}}  >
            <Text style={active2? styles.touchActive:styles.touch1}>Usuarios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{if(!active3)setValue("stores"),handlePress(setActive3)}}>
            <Text style={active3? styles.touchActive:styles.touch1}>Comercios</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{if(!active4)setValue("products"),handlePress(setActive4)}}>
            <Text style={active4? styles.touchActive:styles.touch1}>Productos</Text>
          </TouchableOpacity>
        </View>
        :
        null
      }
      </View>


    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  back:{
    backgroundColor: "#006028"
  },
  backTwo:{
    backgroundColor: "white",
    marginBottom:"1%",

  },
  img:{
    marginRight:"4%"
  },
  view:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-around',
 },
  touch1:{
   marginRight:"6%",
   color:"#A0A0A0",
   borderBottomWidth:1,
   borderBottomColor:"#A0A0A0"
  },
  touchActive:{
    marginRight:"6%",
    color:"black",
    fontWeight:"bold",
    borderBottomWidth:2
  }

})

export default Header
