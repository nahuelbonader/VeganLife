import { SET_CATEGORIES } from "../constant";
import API from "../../api";

const setCategories = (data) => ({ type: SET_CATEGORIES, payload: data });

export const fetchCategories = () => (dispatch) =>
  API.get(`/categories`).then(({ data }) => dispatch(setCategories(data)));
