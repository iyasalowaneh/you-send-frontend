import * as types from "../actions/types";

const initialState = {
  rooms: [],
};

const roomListReducer = (state = initialState, action) => {
  switch (action.type) {
   

    case types.FETCH_ROOM:
      return {
        ...state,
        rooms: action.payload.rooms,
      };
      case types.ADD_ROOM:

        return {
          ...state,
          rooms: [...state.rooms, action.payload.newRoom],
        };
        case types.DELETE_ROOM:
      const roomsToKeep = state.users.filter(
        (room) => room.id !== action.payload.roomId
      );
      return {
        ...state,
        rooms: roomsToKeep,
      };
    default:
      return state;
  }
};

export default roomListReducer;
