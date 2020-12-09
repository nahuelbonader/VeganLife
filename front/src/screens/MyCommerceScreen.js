import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import MyCommerce from '../components/MyCommerce'
import { useSelector } from "react-redux";

const MyCommerceScreen = () => {
  const user = useSelector((state) => state.usersReducer.user);


  return (
    <MyCommerce myImage={user.image} myName={user.name} userId={user._id}/>
  )
}

const styles = StyleSheet.create({

})

export default MyCommerceScreen
