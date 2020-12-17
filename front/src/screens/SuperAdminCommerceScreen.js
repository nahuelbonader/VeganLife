import React, {useState ,useEffect} from 'react'
import { View, Text, Stylesheet} from 'react-native'
import Configs from '../components/SuperAdminCommerce'
import { useSelector, useDispatch } from "react-redux";
import API from '../api/api'
import { editStore } from '../store/actions/stores'


const SuperAdminCommerce = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);

  const [input, setInput] = useState("")
  const storeId = route.params.storeId

  const { stores } = useSelector((state) => state.storesReducer);
  const [store] = stores.filter((s) => s._id == route.params.storeId);

  const [admins, setAdmins] = useState([])
  const [errMessage, setMessage] = useState("")

useEffect(()=>{

 setAdmins(store.admins)

},[store.admins])


  const handleSubmit = () => {
    let bool = true
    let newAdmin = users.filter(el => {
    return input == el.email? el._id : null
   })
    if(!newAdmin[0]) {
      setMessage("El correo ingresado no existe")
      setTimeout(function () {
        setMessage("");
      }, 5000);
      return;
    }
   admins.map(el=>{
     if(el._id === newAdmin[0]._id){
        bool = false
        setMessage("El usuarios ya es admin")
        setTimeout(function () {
          setMessage("");
        }, 5000);
      }
   })

   if(bool) {
     dispatch(editStore({...store, admins: [...store.admins, newAdmin[0]._id]}))
     setInput("")
   }
  }




const handleDelete = (adminId) => {
  dispatch(editStore({ ...store, admins: admins.filter(el=> el._id !== adminId) }))
}




  return (
    <Configs errMessage={errMessage} input={input} setInput={setInput} handleSubmit={handleSubmit} admins={admins} handleDelete={handleDelete}/>
  )
}

export default SuperAdminCommerce
