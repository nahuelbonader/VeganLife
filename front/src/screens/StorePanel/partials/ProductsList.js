import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dialog from "./DialogEdit";
import styles from "../styles/productsList";
import colors from "../../../styles/colors";

export default ({ data, deleteProduct }) => {
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
