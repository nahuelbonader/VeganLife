import { LOGIN_USER } from "../constant";
import API from "../../api/api";

const setUser = (data) => ({ type: LOGIN_USER, payload: data });

export const fetchUser = (user) => (dispatch) =>
  API.post(`/auth/me/`, user).then(({ data }) => dispatch(setUser(data)));
