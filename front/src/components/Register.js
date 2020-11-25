import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native'
//Firebase
import firebase from '../utils/Firebase'
import 'firebase/auth'
import API from '../api/api'



const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    
    const handleSubmit = async () =>{
        
        await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=> API.post ('/users', {email, password})).then((res)=>console.log(res))
            .catch(()=>{
                console.log('ERROR DE AUTENTICACION')
            })
        }

     
const handleChangeEmail = (text) => {
    setEmail(text)
}  

const handleChangePassword = (text) => {
    setPassword(text)
}



    return ( 
        
        <View>
            <Text>Register</Text>
            <View>
                <Text>Correo</Text>
                <TextInput
                    autoCorrect={true}
                    placeholder={'Mail'}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => handleChangeEmail(text)}
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
            <Button onPress={handleSubmit} title='Registrarse'/>

        </View>
     );
}
 
export default Register;