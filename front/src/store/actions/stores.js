import {SET_STORES} from "../constant";
import API from "../../api/api";

const setStores = (data) => ({ type: SET_STORES, payload: data});

export const fetchStores = () => (dispatch) => 
API.get (`/stores`).then(({data}) => dispatch(setStores(data)))

