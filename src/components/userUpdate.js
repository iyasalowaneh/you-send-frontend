// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "../App.css";
// import { updateUser } from "../store/actions/roomActions";
// const UserUpdate = () => {
//   const users = useSelector((state) => state.userReducer.users);
 
//   const founduser = users.find((user) => user.id === user.Id);

//   const dispatch = useDispatch();

//   const [userss, setUserss] = useState({
//     name: "",
//     image: "",
//   });

//   const handleChange = (event) => {
//     setUserss({ ...userss, [event.target.name]: event.target.value });
//   };

//   const handleImage = (event) => {
//     setUserss({ ...userss, image: event.target.files[0] });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (founduser) dispatch(updateUser(userss));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div class="form-group">
//       <label>description</label>
//       <input
//         type="text"
//         class="form-control"
//         placeholder="description"
//         name="description"
//         value={product.description}
//         onChange={handleChange}
//       />
//     </div>
//       <div class="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           class="form-control"
//           placeholder="enter your product name "
//           value={userss.name}
//           name="name"
//           onChange={handleChange}
//         />
//       </div>

//       <div class="form-group">
//         <label>Image</label>
//         <input
//           type="file"
//           class="form-control"
//           placeholder="add your product image "
//           name="image"
//           onChange={handleImage}
//         />
//       </div>
//       <button type="submit" class="btn btn-primary">
//         edi
//       </button>
//     </form>
//   );
// };

// export default UserUpdate;
