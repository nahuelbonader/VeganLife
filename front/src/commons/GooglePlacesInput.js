import React from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import colors from "../styles/colors";

const GooglePlacesInput = ({ handleAdress }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Dirección"
      enablePoweredByContainer={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        handleAdress(data.description, details.geometry.location);
      }}
      query={{
        key: "AIzaSyCerb1eLNyEWiU_iXs10tHvJA_DszN1yBc",
        language: "en",
      }}
      styles={{
        textInputContainer: {
          borderBottomWidth: 1,
          borderBottomColor: colors.dartmouthGreen,
          marginTop: "5%",
          flexDirection: "row",
        },
        container: {
          flex: 1,
        },
        textInput: {
          backgroundColor: "#FFFFFF",
          color: "black",
          height: 44,
          borderRadius: 5,
          paddingVertical: 0,
          paddingHorizontal: 0,
          fontSize: 15,
          flex: 1,
        },
        row: {
          backgroundColor: "#FFFFFF",
          height: 44,
          flexDirection: "row",
        },
        separator: {
          height: 0.6,
          backgroundColor: colors.teaGreen,
        },
        loader: {
          flexDirection: "row",
          justifyContent: "flex-end",
          height: 20,
        },
      }}
    />
  );
};

export default GooglePlacesInput;
