import axios from "axios";
import decode from "jwt-decode";
import * as actionTypes from "./types";
import instance from "./instance";

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/signup`, userData);
      history.push("/Verify");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/signin`, userData);
      console.log(res.data.token);

      dispatch(setUser(res.data.token));
      history.push("/combine");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  localStorage.removeItem("myToken");
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};
const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
export const updateUser = (updateUser) => {
  return async (dispatch) => {
    console.log(updateUser);
    try {
      const formData = new FormData();
      for (const key in updateUser) formData.append(key, updateUser[key]);
      const res = await instance.put(
        // REVIEW: Remove baseURL
        `http://localhost:8000/users/${updateUser.id}`,
        formData
      );
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: { updateUsers: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
