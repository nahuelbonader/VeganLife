import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../styles/colors";
import { userIcon } from "../utils/constants";
import normalize from "react-native-normalize";
import { Entypo } from "@expo/vector-icons";

const AdminList = ({ data, handleDelete }) => {
  return (
    <View style={{ backgroundColor: colors.background }}>
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

const styles = StyleSheet.create({
  container: {
    height: normalize(65),
    width: "100%",
    backgroundColor: colors.background,
    borderBottomColor: colors.lightGrey,
    marginBottom: "2.5%",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "15%",
    height: "85%",
    borderRadius: normalize(100),
    borderColor: colors.darkGreen,
    borderWidth: 2,
    marginHorizontal: "3%",
  },
  name: {
    fontWeight: "bold",
    fontSize: normalize(17),
    marginLeft: "3%",
  },
  button: {
    position: "absolute",
    right: "8%",
  },
  entypo: {
    fontSize: normalize(30),
    color: colors.carrot,
  },
});

export default AdminList;
