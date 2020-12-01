import { SET_RECIPES } from "../constant";
import API from "../../api/api";

const setRecipes = (data) => ({ type: SET_RECIPES, payload: data });

export const fetchRecipes = () => (dispatch) =>
  API.get(`/recipes`).then(({ data }) => dispatch(setRecipes(data)));
