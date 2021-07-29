import * as types from "../actions/types";

const initialState = {
  users: [],
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
   

    case types.FETCH_USER:
      return {
        ...state,
        users: action.payload.users,
      };

    
    default:
      return state;
  }
};

export default roomReducer;
