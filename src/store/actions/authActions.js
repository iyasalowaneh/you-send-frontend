import axios from "axios";
import decode from "jwt-decode";

//Action Types
import * as actionTypes from "./types";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      console.log("action");
      const res = await axios.get("http://localhost:8000/users");
      console.log(res.data); //Remove console log
      dispatch({
        type: actionTypes.FETCH_USER,
        payload: { users: res.data },
      });
    } catch (error) {
      console.log(error); //Remove console log
    }
  };
};
export const signup = (userData, history) => {
  //Remove unused dispatch
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signup`, userData); //Replace with ""
      history.push("/Verify");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signin`, userData); //Replace with ""
      console.log(res.data.token); //Remove console log
      dispatch(setUser(res.data.token));
      history.push("/RoomList");
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
  console.log(token);
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
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

      const res = await axios.put(
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
