import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux"; //Remove unused import
import { useParams } from "react-router-dom"; //Remove unused import

//Styling
import "../App.css";

//Actions
import { signup } from "../store/actions/authActions";
//import { updateUser } from "../store/actions/userActions"; //Remove unused import

const Signup = () => {
  //Remove unused code
  //   const users = useSelector((state) => state.users.users);
  //   const updatedUser = users.find(
  // (user) => user.slug === userSlug
  //);

  //setUser instead of SetUser
  const [user, SetUser] = useState({
    name: "",
    phonenumber: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
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
