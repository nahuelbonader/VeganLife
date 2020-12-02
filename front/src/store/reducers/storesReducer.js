import { SET_STORES } from "../constant"

const initialState = {
    stores: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_STORES:
        return Object.assign({}, state, {stores: action.payload});
        default:
        return state
    }
 }
 