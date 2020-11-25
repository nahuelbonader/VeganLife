import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

const InputData = ({handleChange, title, text, secureTextEntry}) => {
    return ( 
        <View>
                <TextInput
                    autoCorrect={true}
                    style={styles.input}
                    onChangeText={handleChange}
                    value= {text}
                    placeholder={title}
                    secureTextEntry={secureTextEntry}
                />
        </View>
     );
}

const styles = StyleSheet.create({

    input: {
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: 15,
        height: 40,
        width: 350
    }

})
 
export default InputData;