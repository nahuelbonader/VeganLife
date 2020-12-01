import React from 'react';
import { TouchableOpacity, Image,View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ({ scene, previous }) => {
  const navigation = useNavigation()

      return (
    <Appbar.Header style={{backgroundColor: "#006028"}}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}

        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/127173750_1804856602996170_7139672927229840697_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=RC7OZjLj0TkAX-Mm1wk&_nc_ht=scontent.ftuc1-1.fna&oh=bfe785883424fcc0b2d1bbdc9f9b88e5&oe=5FE7142A',
            }}
          />
        </TouchableOpacity>
      )}
      <View>
      <Image
        style={{
          width:"60%",
          height:"90%",
          marginLeft:"50%",

        }}
        source={{
          uri:
            'https://cdn.discordapp.com/attachments/782011623678148618/782011647644270622/VGL1.png',
        }}
      />
      </View>
    </Appbar.Header>
  );
}


export default Header
