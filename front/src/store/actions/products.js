import { SET_PRODUCTS, ADD_PRODUCT } from "../constant";
import API from "../../api/api";

const setProducts = (data) => ({ type: SET_PRODUCTS, payload: data });

const addProduct = (data) => ({ type: ADD_PRODUCT, payload: data });

export const fetchProducts = () => (dispatch) =>
  API.get("/products").then(({ data }) => dispatch(setProducts(data)));

export const createProduct = (product) => (dispatch) =>
  API.post("/products", product).then(({ data }) => dispatch(addProduct(data)));
