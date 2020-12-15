import React, {useState} from 'react'
import { View, Text, Stylesheet} from 'react-native'
import Configs from '../components/SuperAdminCommerce'
import { useSelector } from "react-redux";
import API from '../api/api'

const SuperAdminCommerce = ({ navigation, route }) => {

  const users = useSelector((state) => state.usersReducer.users);
  const [input, setInput] = useState("")
  const storeId = route.params.storeId
  const admins = () => {
   let filtered = []
   for (let i = 0; i < route.params.admins.length; i++) {
     for (let j = 0; j < users.length; j++) {
       if(users[j]._id == route.params.admins[i]) filtered.push(users[j])
     }
   }
   return filtered
 }

  const handleSubmit = () => {
    let newAdmin = users.filter(el => {
    return input == el.email? el._id : null
   })

    API.post(`/stores/${storeId}/${newAdmin[0]._id}`)
       .then(res => res.data)
       .then((data)=>console.log(data))
       .catch(err=> console.log(err))
  }



  return (
    <Configs input={input} setInput={setInput} handleSubmit={handleSubmit} admins={admins()} />
  )
}

export default SuperAdminCommerce
