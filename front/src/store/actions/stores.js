import { SET_STORES, ADD_STORE, EDIT_STORE } from "../constant";
import API from "../../api";

const setStores = (data) => ({ type: SET_STORES, payload: data });

const addStore = (data) => ({ type: ADD_STORE, payload: data });

const replaceStore = (data) => ({ type: EDIT_STORE, payload: data });

export const fetchStores = () => (dispatch) =>
  API.get(`/stores`).then(({ data }) => dispatch(setStores(data)));

export const createStore = (store) => (dispatch) =>
  API.post(`/stores`, store)
    .then(({ data }) => dispatch(addStore(data)))
    .catch((err) => err);

export const editStore = (store) => (dispatch) =>
  API.put(`/stores/${store._id}`, store).then(({ data }) =>
    dispatch(replaceStore(data))
  );
