// import slugify from "slugify";
import * as actionType from "../actions/types";
const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MESSAGE:
      return {
        ...state,
        messages: action.payload.messages,
      };
      case actionType.ADD_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload.newMessage],
        };
        case actionType.ADD_MESSAGE_GROUP:
        return {
          ...state,
          messages: [...state.messages, action.payload.newMessage],
        };
    default:
      return state;
  }
};

export default reducer;
