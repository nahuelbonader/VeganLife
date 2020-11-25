import React,{ useEffect, useState } from "react";
import { View,Text, StyleSheet } from "react-native";
import SingleRecipe from '../components/SingleRecipe'
import axios from 'axios'
import IP from '../../env'

const Recipe = ({recipeId}) => {
const [image, setImage] = useState("")
const [ingredients, setIngredients] = useState("")
const [title, setTitle] = useState("")
const [instructions, setInstructions] = useState("")
const [ownerImage, setOwnerImage] = useState("")
const [ownerName, setOwnerName] = useState("")


 useEffect(()=>{
    axios.get(`http://${IP}:1337/api/recipes/${recipeId}`)
         .then(res => res.data)
         .then(data=> {
           setImage(data.image)
           setTitle(data.title)
           setIngredients(data.ingredients)
           setInstructions(data.instructions)
           setOwnerImage(data.owner.image)
           setOwnerName(data.owner.name)

         })
         .catch(err=> console.log(err))
  },[])

  return (
    <View>
     <SingleRecipe
       image={image}
       ingredients={ingredients}
       title={title}
       instructions={instructions}
       ownerImage={ownerImage}
       ownerName={ownerName}
     />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default Recipe;
