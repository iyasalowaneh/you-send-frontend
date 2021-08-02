import * as types from "../actions/types";

const initialState = {
  // REVIEW: why not null?
  user: [],
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
        user: state.users.map((user) =>
          user.id === updateUsers.id ? updateUsers : user
        ),
      };
    default:
      return state;
  }
};

export default reducer;
