import types from "../types";

const initialState = {
  user: null,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default Auth;
