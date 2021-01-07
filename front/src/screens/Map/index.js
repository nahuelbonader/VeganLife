import React, { useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import styles from "./styles/";
import { useNavigation } from "@react-navigation/native";
import { markers } from "./partials/mapData";
import StarRating from "../../commons/StarRating";
import { storeImg } from "../../utils/constants";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 260;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

//después va a ser screen!!

const Map = () => {
  const stores = useSelector((state) => state.storesReducer.stores);
  const navigation = useNavigation();
  //console.log ('STORES', stores)

  const initialMapState = {
    markers,
    region: {
      latitude: -34.57866,
      longitude: -58.42857,
      //latitude: 22.62938671242907,
      //longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= stores.length) {
        index = stores.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = stores[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = stores.map((store, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View>
      <MapView ref={_map} style={styles.mapStyle} region={state.region}>
        {stores.map((store, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker
              key={index}
              coordinate={{
                latitude: store.location.lat,
                longitude: store.location.lng,
              }}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View style={[styleMap.markerWrap, scaleStyle]}>
                <Animated.Image
                  source={require("../../../assets/map_marker.png")}
                  style={[styleMap.marker]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
        {/* <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}

            image={require('../../assets/map_marker.png')}
            title='NOMBRE DE COMERCIO'
            description='Terrible VeganResto'
          >
            <Callout tooltip>
              <View>
                <View style={styleMap.bubble}>
                  <Text style={styleMap.name}>Restaurante favorito</Text>
                  <Text>Descripcion cortita</Text> 
                  <Image style={styleMap.image} source={require('../../assets/vegana.jpg')}/>
                </View>
                <View style={styleMap.arrowBorder}/>
                <View style={styleMap.arrow}/>
              </View>
            </Callout>
          </Marker> */}
      </MapView>

      {/*<View style={styleMap.searchBox}>
        
           <TextInput
            placeholder='Buscar aqui'
            placeholderTextColor='#000'
            autoCapitalize='none'
            style={{flex:1,padding:0}}
          />
          <Ionicons name='ios-search' size={20}/> 
        </View>*/}

      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styleMap.scrollView}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {stores.map((store, index) => {
          return (
            <View style={styleMap.card} key={index}>
              <Image
                source={store.image ? { uri: store.image } : storeImg}
                style={styleMap.cardImage}
                resizeMode="cover"
              />
              <View style={styleMap.textContent}>
                <Text numberOfLines={1} style={styleMap.cardtitle}>
                  {store.name}
                </Text>
                {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}
                <Text numberOfLines={1} style={styleMap.cardDescription}>
                  {store.description}
                </Text>
                <View style={styleMap.button}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("SingleMarket", {
                        storeId: store._id,
                      })
                    }
                    style={[
                      styleMap.signIn,
                      {
                        borderColor: "#FF6347",
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styleMap.textSign,
                        {
                          color: "#FF6347",
                        },
                      ]}
                    >
                      Comprar Ahora
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styleMap = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  image: {
    width: 120,
    height: 80,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },

  // endPadding: {
  //   paddingRight: width - CARD_WIDTH,
  // },
  card: {
    flex: 1,
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    marginBottom: "4%",
  },
  cardImage: {
    flex: 3.5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
  },
  signIn: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Map;
