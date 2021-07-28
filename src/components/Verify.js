import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"; //Remove unused import
import { useParams } from "react-router-dom"; //Remove unused import

//Actions
import { signin } from "../store/actions/authActions";

const Signin = () => {
  //setUser instead of SetUser
  const [user, SetUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          PHONENUMBER {/*Change to Phone Number */}
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the user phone number" //Change to "Enter your phone number"
          name="username"
          onChange={handleChange}
          value={user.username}
        />
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          User password {/*Change to Password */}
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the user password " //Change to "Enter your password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
      </div>

      <button type="submit">{"Submit"}</button>
    </form>
  );
};

export default Signin;
