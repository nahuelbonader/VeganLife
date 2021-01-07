import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constant";
import API from "../../api";

const setProducts = (data) => ({ type: SET_PRODUCTS, payload: data });

const addProduct = (data) => ({ type: ADD_PRODUCT, payload: data });

const changeProduct = (data) => ({ type: EDIT_PRODUCT, payload: data });

const removeProduct = (data) => ({ type: DELETE_PRODUCT, payload: data });

export const fetchProducts = () => (dispatch) =>
  API.get("/products").then(({ data }) => dispatch(setProducts(data)));

export const createProduct = (product) => (dispatch) =>
  API.post("/products", product)
    .then(({ data }) => dispatch(addProduct(data)))
    .catch((err) => console.log(err));

export const editProduct = (product) => (dispatch) =>
  API.put(`/products/${product._id}`, product)
    .then(({ data }) => {
      console.log(data);
      dispatch(changeProduct(data));
    })
    .catch((err) => console.log(err));

export const deleteProduct = (product) => (dispatch) =>
  API.delete(`/products/${product._id}`)
    .then(({ data }) => dispatch(removeProduct(product)))
    .catch((err) => console.log(err));
