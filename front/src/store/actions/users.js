import { LOGIN_USER } from "../constant";
import API from "../../api/api";

const setLogin = function (loginUser) {
  return {
    type: LOGIN_USER,
    loginUser,
  };
};

export const fetchLogin = (email) => (dispatch) =>
  API.get(`/users/${email}`).then((res) => dispatch(setLogin(res.data)));
