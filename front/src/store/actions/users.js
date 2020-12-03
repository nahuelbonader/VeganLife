import { LOGIN_USER } from "../constant";
import API from "../../api/api";

const setUser = (data) => ({ type: LOGIN_USER, payload: data });

export const fetchUser = (id) => (dispatch) =>
  API.get(`/users/${id}`).then(({ data }) => dispatch(setUser(data)));
