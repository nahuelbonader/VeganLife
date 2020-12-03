import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

  return (
    <View style={styles.backgroundStyle}>
         <Ionicons style={styles.IconStyle} name="md-search" size={24} color="black" />
        <TextInput
         style={styles.searchStyle}
         autoCapitalize="none"
         autoCorrect={false}
         placeholder= "Search"
         value={term}
         onChangeText= {newTerm => onTermChange(newTerm)}
         onEndEditing={onTermSubmit}
         />

    </View>
  )
}

const styles = StyleSheet.create({

backgroundStyle:{
  marginTop:"1%",
  backgroundColor: "#dbdbdb",
  borderRadius: 8,
  flexDirection: "row",
  height:"65%",
  width:"100%",

},
searchStyle:{
flex:1,
fontSize: 20,

},
IconStyle:{
  margin: 8
},

})

export default SearchBar
