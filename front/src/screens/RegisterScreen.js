import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native'
//Firebase
import firebase from '../utils/Firebase'
import 'firebase/auth'
//API
import API from '../api/api'

//hook
import useInputs from '../hooks/useInputs'

//Components
import InputData from '../components/InputData'

const Register = ({navigation}) => {

    const [inputs, handleChange] = useInputs()
    const {name, email, password} = inputs
   
    
    const handleSubmit = async () =>{
        
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        await API.post ('/users', {name, email, password})
            .then(()=>navigation.navigate('Login'))
            .catch(()=>{
                console.log('ERROR DE AUTENTICACION')
            })
        }


    return ( 
        <View>
            <Text>Register</Text>
            <InputData title='Nombre' handleChange={handleChange('name')} text={name}/>
            <InputData title='Correo' handleChange={handleChange('email')} text={email}/>
            <InputData title='Password' handleChange={handleChange('password')} text={password} secureTextEntry={true}/>
            <Button onPress={handleSubmit} title='Registrarse' />

        </View>
     );
}
 
export default Register;