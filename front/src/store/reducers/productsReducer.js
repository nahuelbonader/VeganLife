import { SET_PRODUCTS } from '../constant'

const initialState = {
  products: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {...state, products: payload}
    default:
      return state
  }
}
