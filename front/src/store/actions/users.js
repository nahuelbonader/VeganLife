import { SET_USER, SET_USERS } from "../constant";
import API from "../../api";

const setUser = (data) => ({ type: SET_USER, payload: data });

const setUsers = (data) => ({ type: SET_USERS, payload: data });

export const fetchUser = (user) => (dispatch) =>
  API.post(`/auth/me/`, user).then(({ data }) => dispatch(setUser(data)));

export const fetchUserProfile = (userId) =>
  API.get(`/users/${userId}`).then(({ data }) => data);

export const fetchUsers = () => (dispatch) =>
  API.get(`/users/`).then(({ data }) => dispatch(setUsers(data)));

export const registerUser = (user) =>
  API.post("/users", user).then(({ data }) => data);

export const logoutUser = () => (dispatch) => dispatch(setUser({}));
