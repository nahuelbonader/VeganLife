import { SET_RECIPES, ADD_RECIPE } from "../constant";
import API from "../../api";

const setRecipes = (data) => ({ type: SET_RECIPES, payload: data });

const addRecipe = (data) => ({ type: ADD_RECIPE, payload: data });

export const fetchRecipes = () => (dispatch) =>
  API.get(`/recipes`).then(({ data }) => dispatch(setRecipes(data)));

export const postRecipe = (recipe) => (dispatch) =>
  API.post(`/recipes`, recipe).then(({ data }) => dispatch(addRecipe(data)));
