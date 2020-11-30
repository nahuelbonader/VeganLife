import {LOGIN_USER} from '../constant'
import IP from '../../env'
import API from '../api/api'

const setLogin = function (loginUser) {
    return {
      type: LOGIN_USER,
      loginUser,
    };
  };

export const fetchLogin = (email) => (dispatch) => {
  console.log('ACTION', email)
  API.get(`/users/${email}`)
  .then((res)=>dispatch(setLogin(res.data)))
  
};