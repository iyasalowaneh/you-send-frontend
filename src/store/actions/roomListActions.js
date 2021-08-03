import axios from "axios";
import * as actionTypes from "./types";
import instance from "./instance";

export const fetchRoom = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/rooms");
      dispatch({
        type: actionTypes.FETCH_ROOM,

        payload: { rooms: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createRoom = (newRoom, users) => {
  return async (dispatch) => {
    try {
      // const formData = new FormData();
      // for (const key in newRoom) formData.append(key, newRoom[key]);

      newRoom.users = users;
      const res = await instance.post("/rooms", newRoom);
      dispatch({
        type: actionTypes.ADD_ROOM,
        payload: { newRoom: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
