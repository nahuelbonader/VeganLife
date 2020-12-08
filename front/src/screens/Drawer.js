import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { userIcon } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/drawer";
import firebase from "firebase";
import API from "../api/api";

const DrawerContent = (props) => {
  const user = useSelector((state) => state.usersReducer.user);
  const [userDb, setUserDb] = useState({
    name: "",
    image: "",
    favsRecipes: [],
  });



  console.log('USER', user)
  const userId = user._id
  //const navigation = useNavigation();

  const deslogueo = () => {
    firebase.auth().signOut()
    .then(()=>Alert.alert('Deslogueo Exitoso'))
    .then(()=> props.navigation.navigate('Login'))
    .catch((err) => console.log(err));
  };

    useEffect(() => {
    API.get(`/users/${userId}`).then(({ data }) => setUserDb(data));
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{ uri: userDb.image ? userDb.image : userIcon }}
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
            onPress={() => props.navigation.navigate("Profile", { userId })}
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
