import * as types from "../actions/types";

const initialState = {
  rooms: [],
};

const roomListReducer = (state = initialState, action) => {
  switch (action.type) {
   

    case types.FETCH_ROOM:
      console.log(action.payload)
      return {
        ...state,
        rooms: action.payload.rooms,
      };
      case types.ADD_ROOM:
        return {
          ...state,
          rooms: [...state.rooms, action.payload.newRoom],
        };
    
    default:
      return state;
  }
};

export default roomListReducer;
