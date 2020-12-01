import { LOGIN_USER } from "../constant";

const initialState = {
  LOGIN_USER: {},
};

export default (state = initialState, action) => {
  console.log('REDUCER',action.loginUser)
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { loginUser: action.loginUser }) ;
    default:
      return state;
  }
};