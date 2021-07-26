import axios from "axios";
import decode from "jwt-decode";
import * as actionTypes from "./types";


export const signup = (userData,history) => {
    return async (dispatch) => {
      try {
        const res = await axios.post(
          `http://localhost:8000/signup`,userData
        );
        history.push("/Verify")
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const signin = (userData,history) => {
    return async (dispatch) => {
      try {
        console.log(userData)
        const res = await axios.post(
          `http://localhost:8000/signin`,userData
        );
        console.log(res.data.token)

        dispatch(setUser(res.data.token))
        history.replace("/")
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
    console.log(token)
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
  