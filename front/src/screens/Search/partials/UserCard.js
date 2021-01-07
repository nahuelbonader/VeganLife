import React from "react";
import { userIcon } from "../../../utils/constants";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/userCard";

export default ({ user }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile", { userId: user._id });
      }}
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
