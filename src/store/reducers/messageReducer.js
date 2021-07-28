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
    // case actionType.ADD_SHOP:
    //   const { newShop } = action.payload;
    //   newShop.slug = slugify(newShop.name);

    //   return {
    //     ...state,
    //     products: [...state.products, newShop],
    //   };
    default:
      return state;
  }
};

export default reducer;
