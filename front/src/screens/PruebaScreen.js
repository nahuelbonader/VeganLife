import React from 'react';
import {View, Text, Button} from 'react-native'

import firebase from '../utils/Firebase'
import 'firebase/auth'

const Prueba = ({navigation}) => {

    const logout = ()=>{
        firebase.auth().signOut().then(()=> {
            navigation.navigate('Login')
          }).catch(err => console.log(err));
    }
    
      

    return ( 
        <View>
            <Text>ENTRASTE</Text>
            <Button title='logout' onPress={logout}/>
        </View>
     );
}
 
export default Prueba;