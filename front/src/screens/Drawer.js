import React from "react";
import { View } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/drawer";
import { useSelector } from "react-redux";
import { ownerImg } from "../utils/constants";

const DrawerContent = (props) => {
  const user = useSelector((state) => state.usersReducer.user);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{ uri: user.image ? user.image : ownerImg }}
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
              onPress={() => console.log("presionado")}
            />
          </Drawer.Section>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
