import axios from "axios";
import * as actionTypes from "./types";

export const fetchRoom = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/rooms");
      dispatch({
        type: actionTypes.FETCH_ROOM,

        payload: { rooms: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};