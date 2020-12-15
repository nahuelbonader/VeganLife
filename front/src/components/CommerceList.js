import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { storeImg } from "../utils/constants";
import styles from "../styles/recipeCardSearcher";
import colors from "../styles/colors";

const List = ({ data }) => {
  const navigation = useNavigation();
console.log(data);
  return (
    <View>
      <FlatList
        style={styles.list}
        keyExtractor={(content) => content._id}
        data={data}
        renderItem={({ item }) => {
          return (

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CommercePanel", { CommerceInfo: item })
              }
              style={styles.touchableContainer}
            >
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={item.image ? { uri: item.image } : storeImg}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styless.description}>
                    {item.description.length > 34
                      ? item.description.substr(0, 34) + "..."
                      : item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styless = StyleSheet.create({
  description: {
    color: colors.carrot,
    marginBottom: " 3%",
  },
});

export default List;
