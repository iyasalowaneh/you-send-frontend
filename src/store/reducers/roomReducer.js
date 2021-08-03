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

      case types.UPDATE_USER:
      const { updateUsers } = action.payload;

      return {
        ...state,
        users: state.users.map((user) =>
          user.id === updateUsers.id ? updateUsers : user
        ),
      };
    default:
      return state;
  }
};

export default roomReducer;
