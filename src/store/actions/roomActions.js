import axios from "axios";
import * as actionTypes from "./types";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      console.log("action");
      const res = await axios.get("http://localhost:8000/users");
      console.log(res.data)
      dispatch({
        type: actionTypes.FETCH_USER,

        payload: { users: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};