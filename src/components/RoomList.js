import RoomItem from "./RoomItem";
import GroupChatItem from "./GroupChatItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/authActions";
import "../ChatList.css";
import "../Chat.css";
import { useParams } from "react-router";
import { createRoom } from "../store/actions/roomListActions";
import ChatList from "./ChatList";

const RoomList = ({ setUserId }) => {
  const users = useSelector((state) => state.userReducer.users);
  const rooms = useSelector((state) => state.rooms.rooms);

  const RoomListOne = users.map((user) => (
    <RoomItem setUserId={setUserId} user={user} key={user.id} />
  ));
  const foundUsers = users.map((user) => (
    <option key={user.name} value={user.id}>
      {user.name}
    </option>
  ));

  const roomLi = rooms.map((room) => (
    <GroupChatItem room={room} key={room.id} />
  ));
  const [room, setRoom] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setRoom({ ...room, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createRoom(room));
  };

  const [userCho, setUserCho] = useState([]);

  const handleChangeOne = (event) => {
    console.log(event.target.value);

    setUserCho([...userCho, +event.target.value]);
  };
  return (
    // <>
    //   <head>
    //     <title>Chat</title>
    //     <link
    //       rel="stylesheet"
    //       href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    //       integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    //       crossorigin="anonymous"
    //     />
    //     <link
    //       rel="stylesheet"
    //       href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
    //       integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
    //       crossorigin="anonymous"
    //     />
    //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    //     <link
    //       rel="stylesheet"
    //       type="text/css"
    //       href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
    //     />
    //     <script
    //       type="text/javascript"
    //       src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"
    //     />
    //   </head>
    //   <div>
    //     <div class="container-fluid h-100">
    //       <div class="row justify-content-left h-100">
    //         <div>
    //           <div class="card mb-sm-1 mb-md-0 contacts_card">
    //             <div class="card-header">
    //               <input type="text" placeholder="Search..." />
    //               <button type="button" class="btn btn-primary">
    //                 <i class="fas fa-search"></i>
    //               </button>
    //               <form onSubmit={handleSubmit}>
    //                 <div class="mb-0">
    //                   <label
    //                     for="formGroupExampleInput"
    //                     class="form-label"
    //                   ></label>
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     id="formGroupExampleInput"
    //                     placeholder="Enter the group name"
    //                     name="name"
    //                     onChange={handleChange}
    //                     value={room.name}
    //                   />
    //                 </div>{" "}
    //                 <select
    //                   onChange={handleChangeOne}
    //                   class="aria-select"
    //                   multiple
    //                   aria-label="multiple select example"
    //                 >
    //                   {foundUsers}
    //                 </select>
    //                 <button type="submit"> Submit</button>
    //               </form>
    //               <div class="card-body contacts_body">
    //                 <ui class="contacts">
    //                   {RoomListOne}
    //                   group {roomLi}
    //                 </ui>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <form onSubmit={handleSubmit}>
    <div class="mb-0">
      <label
        for="formGroupExampleInput"
        class="form-label"
      ></label>
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
    <select
      onChange={handleChangeOne}
      class="aria-select"
      multiple
      aria-label="multiple select example"
    >
      {foundUsers}
    </select>
    <button type="submit"> Submit</button>
  </form> );
};

export default RoomList;
