import React, { useState } from "react";
import {ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import AddRecipeStep1 from '../components/AddRecipeStep1'
import InputSelected from '../components/InputSelected'
import ListSelected from '../components/ListSelected'
import SingleRecipeEdit from '../components/SingleRecipeEdit'
import AddIngredientes from '../components/AddIngredientes'

import {postRecipe} from '../store/actions/recipes'


const AddRecipeScreen = ({}) => {

    const navigation = useNavigation();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [category, setCategory] = useState("");
    const [owner, setOwner] = useState("5fbff02945ba1f57318a8346");
    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);
    const [bool5, setBool5] = useState(false);
    const [bool6, setBool6] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.usersReducer.user);

    const categories = useSelector((state) => state.categoriesReducer.categories);

    const handleSubmit = (recipe)=>{
        let catId = {}        
        categories.filter((c)=>{if(c.name==recipe.category){catId =  c._id}})
        dispatch(postRecipe({
            title: recipe.title, 
            image: recipe.image,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            category: catId, 
            owner: user._id
        }))
        navigation.navigate("Feed")

        setBool1(true)
        setBool2(false)
        setBool3(false)
        setBool4(false)
        setBool5(false)
        setBool6(false)
        
        }


    return (
        <ScrollView>
            <AddRecipeStep1
             textbtn={"Siguiente"}
             bool={bool1}
             handleChange={(e)=>{setTitle(e)}}
             ph={"Titulo de la receta"}
             handleBoolean={()=>{setBool1(!bool1), setBool2(!bool2)}}
             value={title}
             />
             <AddRecipeStep1
             textbtn={"Siguiente"}
             textbtn2={"Volver al paso anterior"}
             bool={bool2}
             handleChange={(e)=>{setImage(e)}}
             ph={"Imagen de la receta"}
             handleBoolean={()=>{setBool2(!bool2), setBool3(!bool3)}}
             handleBackBoolean={()=>{setBool1(!bool1), setBool2(!bool2)}}
             value={image}
             />
             <AddIngredientes
             textbtn={"Siguiente"}
             textbtn2={"Volver al paso anterior"}
             bool={bool3}
             handleChange={(e)=>{setIngredients(e)}}
             ph={"Ingredientes"}
             handleBoolean={()=>{setBool3(!bool3), setBool4(!bool4)}}
             handleBackBoolean={()=>{setBool2(!bool2), setBool3(!bool3)}}
             value={ingredients}
             />
             <ListSelected
             textbtn={"Siguiente"}
             textbtn2={"Volver al paso anterior"}
             bool={bool4}
             handleChange={(e)=>{setInstructions(e)}}
             ph={"Instrucciones"}
             handleBoolean={()=>{setBool4(!bool4), setBool5(!bool5)}}
             handleBackBoolean={()=>{setBool4(!bool4), setBool3(!bool3)}}
             value={instructions}
             />
             <InputSelected
             textbtn={"Previsualizar receta"}
             textbtn2={"Volver al paso anterior"}
             bool={bool5}
             handleChange={(e)=>{setCategory(e)}}
             ph={"Categoria"}
             handleBoolean={()=>{setBool5(!bool5), setBool6(!bool6)}}
             handleBackBoolean={()=>{setBool4(!bool4), setBool5(!bool5)}}             
             categories={categories}
             value={category}
             />
            <SingleRecipeEdit 
            bool={bool6}
            title={title}
            image={image}
            ingredients={ingredients}
            instructions={instructions}
            category={category}
            owner={user}
            handleSubmit={handleSubmit}
            handleBackBoolean={()=>{setBool6(!bool6), setBool5(!bool5)}} 
            />
        </ScrollView>
      );
    };
    

    
    export default AddRecipeScreen;
    