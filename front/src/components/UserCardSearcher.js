import React from "react";
import { userIcon } from "../utils/constants";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/userCardSearcher";
import { useSelector, useDispatch } from "react-redux";
import setSearchBar from '../store/actions/showSearchBar'

export default ({ user }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentRoute = useSelector((state) => state.bottomRouteReducer);
  return (
    <TouchableOpacity
      TouchableOpacity
      onPress={() =>{
         dispatch(setSearchBar(false))
         navigation.navigate("Profile", { userId: user._id })}
       }
      style={styles.touchableContainer}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: user.image ? user.image : userIcon }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
