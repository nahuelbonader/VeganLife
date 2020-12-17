import React, {useState ,useEffect} from 'react'
import { View, Text, Stylesheet} from 'react-native'
import Configs from '../components/SuperAdminCommerce'
import { useSelector, useDispatch } from "react-redux";
import API from '../api/api'


const SuperAdminCommerce = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);

  const [input, setInput] = useState("")
  const storeId = route.params.storeId
  const [admins, setAdmins] = useState([])
  const [errMessage, setMessage] = useState("")

useEffect(()=>{
 API.get(`/stores/${storeId}`)
    .then(res => res.data)
    .then(data => {
      setAdmins(data.admins)
    })
},[])

  const handleSubmit = () => {
    let newAdmin = users.filter(el => {
    return input == el.email? el._id : null
   })
   if(newAdmin[0]){
    API.post(`/stores/${storeId}/${newAdmin[0]._id}`)
       .then(res => res.data)
       .then((data)=>{
         API.get(`/users/${data[data.length-1]._id}`)
            .then(res=> res.data)
            .then(data=> setAdmins([...admins, data]))
            .catch(err=> console.log(err))
       })
       .then(()=>setInput(""))
       .catch(err=> {
         console.log(err)
         setMessage("Lo sentimos, hubo un problema :(")

         setTimeout(function () {
           setMessage("");
         }, 5000);
       })
     }
      else{
        setMessage("El correo ingresado no existe")
        setTimeout(function () {
          setMessage("");
        }, 5000);
      }
  }

  const handleDelete = (adminId) => {
    setAdmins(admins.filter(el => el._id !== adminId))
   API.delete(`/stores/${storeId}/${adminId}`)
      .then(res => res.data)
      .catch(err=> console.log(err))
  }


  return (
    <Configs errMessage={errMessage} input={input} setInput={setInput} handleSubmit={handleSubmit} admins={admins} handleDelete={handleDelete}/>
  )
}

export default SuperAdminCommerce
