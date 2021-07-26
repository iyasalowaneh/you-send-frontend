import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
//actions
import { signin } from "../store/actions/authActions";
const Signin = () => {

  const [user, SetUser] = useState({

        username: "",
        password: "",
    

    }
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
     dispatch(signin(user,history));
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          PHONENUMBER 
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the user phonenumber "
          name="username"
          onChange={handleChange}
          value={user.username}
        />
      </div>
    
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          User password 
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the user password "
          name="password"
          onChange={handleChange}
          value={user.password}
        />
      </div>
     
      <button type="submit">{ "Submit"}</button>
    </form>
  );
};

export default Signin;
