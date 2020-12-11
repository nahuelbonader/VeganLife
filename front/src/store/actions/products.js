import { SET_PRODUCTS } from '../constant'
import API from "../../api/api";

const setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    payload: data
  }
}

export const fetchProducts = () => (dispatch) => {
  API.get('/products')
     .then(data=> dispatch(setProducts(data))  )
}
