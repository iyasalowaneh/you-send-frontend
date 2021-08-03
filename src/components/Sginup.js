import { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { useHistory } from "react-router-dom";
//actions
import { signup } from "../store/actions/authActions";
const Signup = () => {
  const [user, SetUser] = useState({
    name: "",
    phonenumber: "",
    image: "",
    status: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    SetUser({ ...user, image: event.target.files[0] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <>
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Register</h3>
            </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>

                  <input
                    type="tel"
                    class="form-control"
                    name="phonenumber"
                    onChange={handleChange}
                    placeholder="enter your number"
                    value={user.phonenumber}
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    onChange={handleChange}
                    placeholder="enter your name"
                    value={user.name}
                  />
                </div>{" "}
                <div>
                  {" "}
                  <input
                    type="text"
                    class="form-control"
                    name="status"
                    onChange={handleChange}
                    placeholder="enter your status"
                    value={user.status}
                  />{" "}
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="file"
                    class="form-control"
                    name="name"
                    onChange={handleImage}
                    placeholder="enter your"
                  />
                </div>
                <button type="submit">get code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
