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

export const createRoom = (newRoom, users, history) => {
  return async (dispatch) => {
    try {
      newRoom.users = JSON.stringify(users);

      const formData = new FormData();
      for (const key in newRoom) formData.append(key, newRoom[key]);
      const res = await instance.post("/rooms", formData);
      history.push("/combine");
      dispatch({
        type: actionTypes.ADD_ROOM,
        payload: { newRoom: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteRoom = (roomId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/rooms/${roomId}`);
      dispatch({
        type: actionTypes.DELETE_ROOM,
        payload: { roomId: roomId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
