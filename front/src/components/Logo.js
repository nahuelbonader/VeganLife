import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const Logo = ({text}) => {
    return ( 
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text style={styles.text}>{text}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    logo: {
        height:150,
        width: 300,
        marginRight: 0,
    },
    container: {
        height:210,
        width: 400,
        margin: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        marginTop: 2
        
    }
})
 
export default Logo ;