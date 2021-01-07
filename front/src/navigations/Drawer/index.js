import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/users";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { userIcon } from "../../utils/constants";
import firebase from "firebase";
import styles from "./styles";

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer.user);
  const deslogueo = () => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch(logoutUser()))
      .then(() => props.navigation.navigate("Login"))
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
                --{" "}
              </Paragraph>
              <Caption style={styles.caption}>Siguiendo</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {" "}
                --{" "}
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
            onPress={() =>
              props.navigation.navigate("Profile", { userId: user._id })
            }
          />
          {/* <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Perfil Vegan Market"
            onPress={() => console.log("IR A PERFIL")}
          /> */}
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="store" color={color} size={size} />
            )}
            label="Ver mis comercios"
            onPress={() => props.navigation.navigate("MyCommerces")}
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
