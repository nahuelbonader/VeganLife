import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import normalize from "react-native-normalize";
import Dialog from "./DialogEdit";

import colors from "../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const List = ({ data, deleteProduct }) => {
  const [id, setId] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        keyExtractor={(content) => content._id}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.textContentView}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.txt}>Stock: {item.stock} U</Text>
              <Text style={styles.txt}>Precio: ${item.price}</Text>
            </View>
            <View style={styles.iconsContainer}>
              <MaterialCommunityIcons
                onPress={() => deleteProduct(item)}
                style={styles.deleteIcon}
                name="close-circle-outline"
                size={20}
                color="black"
              />
              <View style={styles.editIcon}>
                <MaterialCommunityIcons
                  onPress={() => {
                    setId(item._id);
                    setVisible(true);
                  }}
                  name="pencil"
                  size={25}
                  color={colors.darkGreen}
                />
              </View>
            </View>
          </View>
        )}
      />
      <Dialog visible={visible} hideDialog={hideDialog} productId={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  itemContainer: {
    backgroundColor: colors.containers,
    alignSelf: "center",
    marginVertical: "2%",
    flexDirection: "row",
    width: "90%",
    height: normalize(100),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.ligthGray,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: "5%",
  },

  image: {
    width: "25%",
    height: "80%",
    borderRadius: 20,
    marginRight: "5%",
  },
  textContentView: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  txt: {
    color: "#4d4d4d",
  },
  iconsContainer: {
    height: "100%",
    justifyContent: "space-around",
  },
  editIcon: {
    color: colors.darkGreen,
    backgroundColor: colors.background,
    borderRadius: 20,
    borderColor: colors.darkGreen,
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  deleteIcon: {
    color: colors.carrot,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default List;
