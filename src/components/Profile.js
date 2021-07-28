import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"; // Remove unused import

//Styling
import "../App.css";

//Actions
import { updateUser } from "../store/actions/authActions";

//Rename to Profile
const Signup = () => {
  const users = useSelector((state) => state.users.users);

  console.log(users); //Remove console log

  //Remove unused code
  //    const updatedUser = users.find(
  //     (user) => user.slug === userSlug
  //   );

  const [user, SetUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    status: "",
  });
  const dispatch = useDispatch();

  const history = useHistory(); //Unused

  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(user));
  };

  const handleImage = (event) => {
    SetUser({ ...user, image: event.target.files[0] });
  }; //Unused

  return (
    <>
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Profile</h3>
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
                    type="text"
                    class="form-control"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="enter your firstName"
                    value={user.firstName}
                  />
                </div>
                {/*Remove unused code */}
                {/* 
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control"  name="image" onChange={handleImage} placeholder="enter your status"  
    />
                            
                        </div> */}

                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="enter your lastName"
                    value={user.lastName}
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
                    name="status"
                    onChange={handleChange}
                    placeholder="enter your status"
                    value={user.status}
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