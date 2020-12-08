import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Paragraph,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { userIcon } from "../utils/constants";
import styles from "../styles/drawer";
import firebase from "firebase";

const DrawerContent = (props) => {
  const user = useSelector((state) => state.usersReducer.user);
  const deslogueo = () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{ uri: user.image ? user.image : userIcon }}
            size={50}
          />
          <Title style={styles.name}>{user.name}</Title>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {" "}
                ???{" "}
              </Paragraph>
              <Caption style={styles.caption}>Siguiendo</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {" "}
                ???{" "}
              </Paragraph>
              <Caption style={styles.caption}>Seguidores</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Perfil Vegan Cook"
            onPress={() => console.log("IR A PERFIL")}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Perfil Vegan Market"
            onPress={() => console.log("IR A PERFIL")}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="store"
                color={color}
                size={size}
              />
            )}
            label="Ver mis comercios"
            onPress={() => props.navigation.navigate("MyCommerce")}
          />
        </Drawer.Section>

        <View>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="exit-to-app"
                  color={color}
                  size={size}
                />
              )}
              label="Log Out"
              onPress={user._id ? deslogueo : null}
            />
          </Drawer.Section>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
