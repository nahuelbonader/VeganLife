import {
  SET_FAVS_RECIPES,
  SET_FAVS_PRODUCTS,
  SET_FAVS_STORES,
} from "../constant";
import API from "../../api";

// RECIPES
const setRecipes = (data) => ({ type: SET_FAVS_RECIPES, payload: data });

export const fetchFavsRecipes = (userId) => (dispatch) =>
  API.get(`/favourites/${userId}/recipes`).then(({ data }) =>
    dispatch(setRecipes(data))
  );

export const addRecipeToFavs = (userId, recipe) => (dispatch) =>
  API.post(`/favourites/${userId}/recipes`, recipe).then(({ data }) =>
    dispatch(setRecipes(data))
  );

export const deleteRecipeFromFavs = (userId, recipeId) => (dispatch) => {
  API.delete(`/favourites/${userId}/recipes/${recipeId}`).then(({ data }) =>
    dispatch(setRecipes(data))
  );
};

// PRODUCTS
const setProducts = (data) => ({
  type: SET_FAVS_PRODUCTS,
  payload: data,
});

// STORES
const setStores = (data) => ({ type: SET_FAVS_STORES, payload: data });
