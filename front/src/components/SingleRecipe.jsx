import React from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import normalize from 'react-native-normalize';

const SingleRecipe = ({
  image,
  ingredients,
  title,
  instructions,
  ownerImage,
  ownerName,
}) => {
  return (
    <View style={{ backgroundColor: "#F1F4FB" }}>
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image
            style={styles.image}
            source={{ uri: image  }}
          />
          <TouchableOpacity
            style={styles.favButton}
            onPress={() => console.log("presionado")}
          >
            <View>
              <Icon
                style={{
                  alignSelf: "center",
                  top: normalize(11),
                  fontSize: normalize(25),
                }}
                name="md-heart"
                size={30}
                color="#35b056"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewProfile}>
          <Image
            style={styles.profilePic}
            source={{
              uri:
                ownerImage !== ""
                  ? ownerImage
                  : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg",
            }}
          />
          <Text style={styles.name}>{ownerName}</Text>
        </View>
        <View style={styles.viewThree}>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>Ingredientes</Text>
            <Text style={styles.textTwo}>{ingredients}</Text>
            {/* mapear arreglo con objetos ingredientes [{cantidad: 200g, ingrediente: azucar},{cantidad: 200g, ingrediente: azucar}] */}
            <Text style={styles.text}>Paso a Paso</Text>
            <Text style={styles.textTwo}>{instructions}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: normalize(200),
    flexDirection: "row",
    marginVertical: normalize(12),
  },
  image: {
    borderRadius: normalize(25),
    flex: 1,
  },
  viewProfile: {
    flexDirection: "row",
    marginHorizontal: normalize(30),
  },
  profilePic: {
    width: normalize(65),
    height: normalize(65),
    borderRadius: normalize(50),
  },
  name: {
    alignSelf: "stretch",
    color: "green",
    top: normalize(20),
    marginLeft: normalize(10),
    fontWeight: "bold",
    fontSize: normalize(20),
  },
  viewThree: {
    borderRadius: normalize(25),
    backgroundColor: "white",
    paddingBottom: normalize(70),
    marginTop: normalize(15),
  },
  title: {
    marginTop: normalize(10),
    marginBottom: normalize(15),
    color: "green",
    fontSize: normalize(30),
    alignSelf: "center",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.40)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: normalize(15),
  },
  text: {
    textTransform: "uppercase",
    color: "green",
    fontWeight: "bold",
    fontSize: normalize(20),
    marginTop: normalize(15),
    marginBottom: normalize(10),
  },
  textTwo: {
    color: "#808080",
    fontSize: normalize(17),
    marginBottom: normalize(5),
  },
  favButton: {
    width: normalize(43),
    height: normalize(43),
    backgroundColor: "white",
    borderRadius: normalize(50),
    position: "absolute",
    right: normalize(30),
    top: normalize(140),
  },
});

export default SingleRecipe;
