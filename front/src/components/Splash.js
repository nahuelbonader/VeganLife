import React from 'react';
import {View, ImageBackground, Image} from 'react-native'

const Splash = () => {
    const fondo=require('../../assets/fondo.png')
    const logo=require('../../assets/logo.png')
    return ( 
        <View>
            <ImageBackground source={fondo} style={{height:'100%', width:'100%'}}>
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center', }}>
                <Image source={logo} style={{height:100, width:100}} />
            </View>
            </ImageBackground>

        </View>
     );
}
 
export default Splash;