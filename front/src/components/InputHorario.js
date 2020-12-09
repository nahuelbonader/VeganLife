import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'
import colors from "../styles/colors"
import { RadioButton } from 'react-native-paper';

const Input = ({ open,checked,setChecked, setOpen, text1,text2,text3,text4,text1c,text2c,text3c,text4c, handleChange1,handleChange2,handleChange3,handleChange4,handleChange1c,handleChange2c,handleChange3c,handleChange4c, dia }) => {
  return(
    <View style={{paddingBottom:"12%"}}>
    <View style={styles.background}>
      <Text style={styles.text}>{dia}</Text>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
         <Text>No</Text>
         <RadioButton
         value="first"
         status={ checked === 'first' ? 'checked' : 'unchecked' }
         onPress={() => {setChecked('first'),setOpen(false)}}
         />
         <Text>Si</Text>
         <RadioButton
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => {setChecked('second'),setOpen(true)}}
         />
      </View>
    {!open?
      null
      :
      <View>
      <View style={styles.view}>
      {console.log("OPEN",open)}
      <Text style={styles.hasta}>Desde</Text>
           <TextInput
           style={styles.input}
            autoCorrect={false}
            value={text1}
            onChangeText={handleChange1}
            placeholder="HH"
           />
           <Text style={styles.descriptionText}>:</Text>
           <TextInput
           style={styles.input}
           value={text2}
           autoCorrect={false}
           onChangeText={handleChange2}
           placeholder="mm"
           />
           <Text style={styles.descriptionText}>Am</Text>
           <Text style={styles.hasta}>Hasta</Text>
           <TextInput
           style={styles.input}
            autoCorrect={false}
            value={text1c}
            onChangeText={handleChange1c}
            placeholder="HH"
           />
           <Text style={styles.descriptionText}>:</Text>
           <TextInput
           style={styles.input}
           value={text2c}
           autoCorrect={false}
           onChangeText={handleChange2c}
           placeholder="mm"
           />
      </View>
      <View style={styles.view}>
      <Text style={styles.hasta}>Desde</Text>
        <TextInput
        style={styles.input}
         autoCorrect={false}
         value={text3}
         onChangeText={handleChange3}
         placeholder="HH"
        />
        <Text style={styles.descriptionText}>:</Text>
        <TextInput
        style={styles.input}
        value={text4}
        onChangeText={handleChange4}
        autoCorrect={false}
        placeholder="mm"
        />
         <Text style={styles.descriptionText}>Pm</Text>

         <Text style={styles.hasta}>Hasta</Text>
           <TextInput
           style={styles.input}
            autoCorrect={false}
            value={text3c}
            onChangeText={handleChange3c}
            placeholder="HH"
           />
           <Text style={styles.descriptionText}>:</Text>
           <TextInput
           style={styles.input}
           value={text4c}
           onChangeText={handleChange4c}
           autoCorrect={false}
           placeholder="mm"
           />
      </View>
      </View>
    }
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flexDirection:'row'
  },
  text:{
    color: colors.carrot,
    fontWeight:'bold',
    fontSize:17,
    alignSelf:'center'
  },
  descriptionText:{
    right:"21%",
    top:"5%",
    color:colors.font
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor: colors.font,
    width:"7%",
    marginRight:"5%",
    marginTop:"4%"
  },
  hasta:{
    top:"5%",
    fontWeight:'bold',
    marginRight:"5%"
  },
  background:{
    backgroundColor:colors.containers,
    borderRadius:30,
    padding:"6%"
  }
})

export default Input
