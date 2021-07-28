import axios from "axios";
import * as actionType from "./types"
   
export const fetchMessage = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/messages");
      dispatch({
        type: actionType.FETCH_MESSAGE,

        payload: { messages: res.data },
      });
    } catch (error) {
      console.log(error)
    }
  };
};
// export const addshop = (newShop) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in newShop) formData.append(key, newShop[key]);

//       const res = await axios.post(`http://localhost:8080/shops/:shopId/shops/`, formData);
//       dispatch({
//         type: actionType.ADD_PRODUCT,
//         payload: { newShop: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };