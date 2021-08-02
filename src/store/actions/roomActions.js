import axios from "axios";
import * as actionTypes from "./types";
import instance from "./instance";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      console.log("action");
      const res = await instance.get("/users");
      dispatch({
        type: actionTypes.FETCH_USER,

        payload: { users: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};