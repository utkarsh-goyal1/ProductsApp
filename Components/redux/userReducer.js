import { SET_USER_DATA } from "./constants";

const initialState = [];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
            let res = [
                ...state,
                ...action.payload  
            ];
            return res;
    default:
      return state;
  }
};
