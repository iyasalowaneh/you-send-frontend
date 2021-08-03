import RoomItem from "./RoomItem";
import GroupRoomItem from "./GroupRoomItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import "../ChatList.css";
import "../Chat.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const RoomList = ({ setUserId, setRoomId }) => {
  const users = useSelector((state) => state.userReducer.users);
  const user = useSelector((state) => state.users.user);
  const rooms = useSelector((state) => state.rooms.rooms);
  const [query, setQuery] = useState("");
  const RoomListOne = users
    .filter((user) => user.name.includes(query.toLowerCase()))
    .filter((userOn) => userOn.id !== user.id)
    .map((user) => (
      <RoomItem
        setRoomId={setRoomId}
        setUserId={setUserId}
        user={user}
        rooms={rooms}
        key={user.id}
      />
    ));
  const s = rooms;

  const roomLi = rooms
    .filter((room) => room.name.includes(query.toLowerCase()))
    .map((room) => (
      <GroupRoomItem
        setUserId={setUserId}
        setRoomId={setRoomId}
        room={room}
        user={user}
        key={room.id}
      />
    ));

  return (
    <>
      <head>
        <title>Chat</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossorigin="anonymous"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"
        />
      </head>

      <div>
        <div class="card mb-sm-2 mb-md-2 contacts_card">
          <p> hellooo {user.name}</p>
          <Link to="userUpdate">update profile </Link>
          <Link to="/createGroups">
            <i class="fas fa-users"></i>{" "}
          </Link>{" "}
          <div class="card-header">
            {" "}
            <SearchBar placeholder="Search..." setQuery={setQuery} />
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>{" "}
            <div class="card-body contacts_body">
              <ui class="contacts">
                {RoomListOne}
                group {roomLi}
              </ui>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomList;
