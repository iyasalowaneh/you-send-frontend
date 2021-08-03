import GroupRoomItem from "./GroupRoomItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../store/actions/roomListActions";
import { useHistory } from "react-router-dom";

const CreateGroup = () => {
  const history = useHistory();
  const users = useSelector((state) => state.userReducer.users);
  const rooms = useSelector((state) => state.rooms.rooms);

  const foundUsers = users.map((user) => (
    <option key={user.name} value={user.id}>
      {user.name}
    </option>
  ));

  const roomLi = rooms.map((room) => (
    <GroupRoomItem room={room} key={room.id} />
  ));
  const [room, setRoom] = useState({
    name: "",
    image: "",
  });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setRoom({ ...room, [event.target.name]: event.target.value });
  };
  const [user, setUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRoom(room, user,history));
  };
  const handleImage = (event) => {
    setRoom({ ...room, image: event.target.files[0] });
  };
  const handleChangeOne = (event) => {
    setUser([...user, +event.target.value]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-0">
        <label for="formGroupExampleInput" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter the group name"
          name="name"
          onChange={handleChange}
          value={room.name}
        />
      </div>{" "}
      <div class="mb-0">
        <label for="formGroupExampleInput" class="form-label"></label>
        <input
          type="file"
          class="form-control"
          id="formGroupExampleInput"
          name="image"
          onChange={handleImage}
        />
      </div>
      <select
        onChange={handleChangeOne}
        class="aria-select"
        multiple
        aria-label="multiple select example"
      >
        {foundUsers}
      </select>
      <button type="submit"> Submit</button>
    </form>
  );
};

export default CreateGroup;
