import React,{useState, useEffect} from 'react';
import { TouchableOpacity, Image, Text,  View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux'

import SearchBar from '../components/SearchBar'

const Header = ({ scene, previous }) => {
  const navigation = useNavigation()
  const currentRoute = useSelector(state=> state.bottomRouteReducer)
  const [term, setTerm] = useState("")

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
        onTermSubmit={() => console.log("term submitted:", term)}
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
          <TouchableOpacity ><Text style={styles.touch1}>Recetas</Text></TouchableOpacity>
          <TouchableOpacity style={styles.touch2}><Text>Usuarios</Text></TouchableOpacity>
          <TouchableOpacity style={styles.touch3}><Text>Comercios</Text></TouchableOpacity>
          <TouchableOpacity style={styles.touch4}><Text>Productos</Text></TouchableOpacity>
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
   color:"#A0A0A0"
  },
  touch2:{
marginRight:"6%"
  },
  touch3:{
marginRight:"6%"
  },
  touch4:{
marginRight:"6%"
  },

})

export default Header
