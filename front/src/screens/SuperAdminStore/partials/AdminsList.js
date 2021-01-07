import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { userIcon } from "../../../utils/constants";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles/adminsList";

export default ({ data, handleDelete }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(content) => content._id}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: item.image ? item.image : userIcon }}
              />
              <Text style={styles.name}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => handleDelete(item._id)}
                style={styles.button}
              >
                <Entypo style={styles.entypo} name="squared-cross" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
