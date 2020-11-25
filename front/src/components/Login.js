import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native'
//Firebase
import firebase from '../utils/Firebase'
import 'firebase/auth'



const Login = ({ user, signOut, signInWithGoogle }) => {

    const [correo, setCorreo] = useState('')
    
    const [password, setPassword] = useState('')
    
    // firebase.auth().onAuthStateChanged(user => {
    //     console.log(user)
    //     user ? console.log('Usuario Logueado') : console.log('Usuario no Logueado')
    // })


     
const handleChangeCorreo = (text) => {
    console.log(correo)
    setCorreo(text)
}  

const handleChangePassword = (text) => {
    console.log(password)
    setPassword(text)
}

const handleSubmit = () =>{

    firebase.auth().signInWithEmailAndPassword(correo,password)
    .catch(()=>{
        console.log('ERROR DE AUTENTICACION')
    });
}


 


    return ( 
        
        <View>
            <Text>LOGIN</Text>
            <View>
                <Text>Correo</Text>
                <TextInput
                    autoCorrect={true}
                    placeholder={'Mail'}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => handleChangeCorreo(text)}
                />
                <Text>Clave</Text>
                <TextInput
                    autoCorrect={true}
                    placeholder={'Password'}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    secureTextEntry={true}
                    onChangeText={(text)=> handleChangePassword(text)}
                />
            </View>
            <Button onPress={handleSubmit()} title='Iniciar Sesion'/>

        </View>
     );
}
 
export default Login;