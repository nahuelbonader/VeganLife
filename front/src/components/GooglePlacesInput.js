import React from 'react';
import {View, StyleSheet} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({handleAdress}) => {
  return (

    <View style={styles.container}>
        <GooglePlacesAutocomplete
        style={styles.textInput, styles.textInputContainer}
        placeholder="Dirección"
        enablePoweredByContainer={false}
        fetchDetails= {true}
        onPress={(data, details = null) => {
            handleAdress(data.description, details.geometry.location)
        }}
        query={{
            key: 'AIzaSyCerb1eLNyEWiU_iXs10tHvJA_DszN1yBc',
            language: 'en',
        }}
        
        />
    </View>
  );
};

const styles=StyleSheet.create({
    textInputContainer: {
        width: "100%",
        alignSelf: "center",
        elevation: 3,
        backgroundColor: "white",
        borderRadius: 5,
      },
      textInput: {
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        height: "100%",
      },
      container: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        marginBottom: 18,
      }
})



export default GooglePlacesInput;