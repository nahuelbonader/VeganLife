import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme, Avatar, Title, Caption, Drawer , Paragraph, TouchableRipple, Switch} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FeedRecetas from './FeedRecetaScreen'
import Header from './Header'
import styles from "../styles/drawer"

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/127173750_1804856602996170_7139672927229840697_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=RC7OZjLj0TkAX-Mm1wk&_nc_ht=scontent.ftuc1-1.fna&oh=bfe785883424fcc0b2d1bbdc9f9b88e5&oe=5FE7142A',
            }}
            size={50}
          />
          <Title style={styles.name}>Ian</Title>
          <View style={styles.row}>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>  ??? </Paragraph>
                <Caption style={styles.caption}>Siguiendo</Caption>
          </View>
            <View style={styles.section}>
               <Paragraph style={[styles.paragraph, styles.caption]}> ??? </Paragraph>
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
              onPress={() => {console.log("IR A PERFIL")}}
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
              onPress={() => {console.log("IR A PERFIL")}}
            />
      </Drawer.Section>
      <View >
      <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
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
  )
}


export default DrawerContent
