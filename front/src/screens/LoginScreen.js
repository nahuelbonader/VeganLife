import React, { useState } from 'react';
import {Text,  View, Button, StyleSheet} from 'react-native'
//Firebase
import firebase from '../utils/Firebase'
import 'firebase/auth'

//hook
import useInputs from '../hooks/useInputs'

//Components
import InputData from '../components/InputData'
import Logo from '../components/Logo'




const Login = ({navigation}) => {
    const [inputs, handleChange] = useInputs()
    const {email, password} = inputs
    const [errorMessage, setError] = useState('')
    // firebase.auth().onAuthStateChanged(user => {
    //     user ? navigation.navigate('Prueba') : console.log('Usuario no Logueado')
    // })
     


const handleSubmit = () =>{

    

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(({user})=>user ? navigation.navigate('FeedRecetas') : console.log('Usuario no Logueado'))
    .catch((err)=>{
        console.log('ERROR DE AUTENTICACION', err)
        if (String(err)==='Error: The password is invalid or the user does not have a password.')
        setError('La contraseña es invalida.')
        
        else if (String(err)==='Error: There is no user record corresponding to this identifier. The user may have been deleted.')
        setError('El usuario es inexistente.')

    });
}

    return ( 
        
        <View style={styles.container}>
            <Logo text='Iniciar Sesion' />
            <InputData title='Correo' handleChange={handleChange('email')} text={email}/>
            <InputData title='Password' handleChange={handleChange('password')} text={password} secureTextEntry={true}/>
            <Button onPress={handleSubmit} title='Iniciar Sesion'/>
            <Button onPress={()=> navigation.navigate('Register')} title='Registrarse'/>
            <Text>{errorMessage}</Text>
        </View>
     );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF'
    }

})
 
export default Login;