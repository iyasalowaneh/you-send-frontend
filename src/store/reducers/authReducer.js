import * as types from "../actions/types";

const initialState = {
  user: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case types.FETCH_USER:
      console.log(action.payload); //Remove console log
      return {
        ...state,
        users: action.payload.users,
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
