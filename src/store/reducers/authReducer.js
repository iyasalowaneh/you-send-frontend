import * as types from "../actions/types";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
  return {
    ...state,
    user: action.payload,
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

export default reducer;

