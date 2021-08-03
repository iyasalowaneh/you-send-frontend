import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { useHistory } from "react-router-dom";
import { updateUsers } from "../store/actions/roomActions";
const UserUpdate = () => {
  const users = useSelector((state) => state.userReducer.users);
  const history = useHistory();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    phonenumber: "",
    image: "",
    status: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setUser({ ...user, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUsers(user, history));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div class="form-group">
      <label>description</label>
      <input
        type="text"
        class="form-control"
        placeholder="description"
        name="description"
        value={product.description}
        onChange={handleChange}
      />
    </div> */}
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="enter your name "
          value={user.name}
          name="name"
          onChange={handleChange}
        />
      </div>{" "}
      <div class="form-group">
        <label>phonenumber</label>
        <input
          type="text"
          class="form-control"
          placeholder="enter your phonenumber  "
          value={user.phonenumber}
          name="phonenumber"
          onChange={handleChange}
        />
      </div>{" "}
      <div class="form-group">
        <label>status</label>
        <input
          type="text"
          class="form-control"
          placeholder="enter your status"
          value={user.status}
          name="status"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Image</label>
        <input
          type="file"
          class="form-control"
          placeholder="add your product image "
          name="image"
          onChange={handleImage}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        edi
      </button>
    </form>
  );
};

export default UserUpdate;
