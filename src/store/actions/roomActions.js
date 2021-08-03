import axios from "axios";
import * as actionTypes from "./types";
import instance from "./instance";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
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

export const updateUsers = (updateUser, history) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updateUser) formData.append(key, updateUser[key]);

      const res = await instance.put("/userUpdate", formData);
      history.push("/combine");
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/${userId}`);
      dispatch({
        type: actionTypes.DELETE_USER,
        payload: { userId: userId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
