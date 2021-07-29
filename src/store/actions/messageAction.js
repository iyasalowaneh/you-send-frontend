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
export const addMessage = (newMessage) => {
  return async (dispatch) => {
    try {
      

      const res = await axios.post(`http://localhost:8000/${newMessage.userId}/messageCreat/`, newMessage);
      dispatch({
        type: actionType.ADD_MESSAGE,
        payload: { newMessage: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};