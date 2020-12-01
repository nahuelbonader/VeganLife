import React,{ useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SingleCategory from '../components/SingleCategory'
import axios from 'axios'
import IP from '../../env'

const SingleCategoryScreen = ({ navigation, route }) => {
const [recipes, setRecipes] = useState([])
const [category, setCategory] = useState("")

useEffect(() =>{
  let mounted = true;
  if(mounted){
  axios.get(`http://${IP}:1337/api/recipes`)
       .then(res => res.data)
       .then(data =>{
          setRecipes(data.filter(el=> el.category._id == route.params.categoryId))
          data.filter(el=>{
             el.category._id == route.params.categoryId? setCategory([el.category.image]): null
           })
           })
       .catch(err=> console.log(err))
       }
  return () => mounted = false;
},[])

  return (
   <View>
   <SingleCategory recipes={recipes} categoryImage={category}/>
   </View>
  )
}

export default SingleCategoryScreen
