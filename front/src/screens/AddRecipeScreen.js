import React, { useEffect, useState } from "react";
import {ScrollView, Text, View, Keyboard, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categories";
import MaterialChip from "react-native-material-chip"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from "@react-navigation/native";

import AddRecipeStep1 from '../components/AddRecipeStep1'
import InputSelected from '../components/InputSelected'

import ChipSelected from '../components/ChipSelected'
import SingleRecipeEdit from '../components/SingleRecipeEdit'

const AddRecipeScreen = ({}) => {

    const navigation = useNavigation();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState("");
    const [category, setCategory] = useState("");
    const [owner, setOwner] = useState("5fbff02945ba1f57318a8346");
    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);
    const [bool5, setBool5] = useState(false);
    const [bool6, setBool6] = useState(false);
    const dispatch = useDispatch();

    

    const categories = useSelector((state) => state.categoriesReducer.categories);

    const handleSubmitStep1 = (evt)=>{
        console.log(evt)
        //este deberia hacer el dispatch a la db
    }


    useEffect(() => {
        dispatch(fetchCategories());
      }, []);

    console.log("ESTADO", {title, image, ingredients, instructions, category, owner})

    return (
        <ScrollView>
            <AddRecipeStep1
             textbtn={"Siguiente"}
             bool={bool1}
             handleChange={(e)=>{setTitle(e)}}
             ph={"Titulo de la receta"}
             handleBoolean={()=>{setBool1(!bool1), setBool2(!bool2)}}
             />
             <AddRecipeStep1
             textbtn={"Siguiente"}
             bool={bool2}
             handleChange={(e)=>{setImage(e)}}
             ph={"Imagen de la receta"}
             handleBoolean={()=>{setBool2(!bool2), setBool3(!bool3)}}
             />
             <ChipSelected
             textbtn={"Siguiente"}
             bool={bool3}
             handleChange={(e)=>{setIngredients(e)}}
             ph={"Ingredientes"}
             handleBoolean={()=>{setBool3(!bool3), setBool4(!bool4)}}
             />
             <AddRecipeStep1
             textbtn={"Siguiente"}
             bool={bool4}
             handleChange={(e)=>{setInstructions(e)}}
             ph={"Paso a paso"}
             handleBoolean={()=>{setBool4(!bool4), setBool5(!bool5)}}
             />
             <InputSelected
             textbtn={"Categoria"}
             bool={bool5}
             handleChange={(e)=>{setCategory(e)}}
             ph={"Categoria"}
             handleBoolean={()=>{setBool5(!bool5), setBool6(!bool6)}}             
             categories={categories}
             />
            <SingleRecipeEdit 
            bool={bool6}
            title={title}
            image={image}
            ingredients={ingredients}
            instructions={instructions}
            category={category}
            owner={owner}
            />
        </ScrollView>
      );
    };
    

    
    export default AddRecipeScreen;
    