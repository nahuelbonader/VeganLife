import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import colors from "../styles/colors"
import { userIcon } from "../utils/constants";
import normalize from "react-native-normalize";
import { Entypo } from '@expo/vector-icons';

const AdminList = ({ data, handleDelete }) => {

  return (
    <View>
    <FlatList
      keyExtractor={(content) => content._id}
      data={data}
      renderItem={({item})=> {
        return (
          <View style={styles.container}>
            <Image
            style={styles.image}
            source={{ uri: item.image? item.image : userIcon}}
            />
           <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity
            onPress={()=>handleDelete(item._id)}
            style={styles.button}
            >
              <Entypo name="squared-cross" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )
      }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: normalize(65),
    width: "100%",
    borderRadius: 20,
   backgroundColor:colors.background,
   marginVertical:'2%',
   borderBottomColor: colors.darkGray,
   borderBottomWidth:1,
   flexDirection: "row",
   alignItems:'center'

  },
  image: {
    width: "15%",
    height: "85%",
    borderRadius: 100,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    marginHorizontal:"3%"
  },
  name:{
    fontWeight:'bold',
    marginLeft:"3%"
  },
  button:{
   position:'absolute',
   right:'8%',

  }
})

export default AdminList
