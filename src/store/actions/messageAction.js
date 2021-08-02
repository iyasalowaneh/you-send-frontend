import axios from "axios";
import * as actionType from "./types";
import instance from "./instance";

// REVIEW: fetchMessage means you're fetching one message only.
// Change it to fetchMessages, the type as well.
export const fetchMessage = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/messages");
      dispatch({
        type: actionType.FETCH_MESSAGE,

        payload: { messages: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addMessage = (newMessage) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/messageCreat", newMessage);
      dispatch({
        type: actionType.ADD_MESSAGE,
        payload: { newMessage: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
