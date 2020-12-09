import { SEARCH, PRESSED } from "../constant";

export const setSearch = (data) => ({ type: SEARCH, payload: data });
export const setPressed = (data) => ({ type: PRESSED, payload: data });
