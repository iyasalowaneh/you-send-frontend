import RoomItem from "./RoomItem";
import GroupRoomItem from "./GroupRoomItem";
import { useSelector } from "react-redux";
import "../ChatList.css";
import "../Chat.css";
import { Link } from "react-router-dom";

const RoomList = ({ setUserId,setRoomId }) => {
  const users = useSelector((state) => state.userReducer.users);
  const rooms = useSelector((state) => state.rooms.rooms);
  const RoomListOne = users.map((user) => (
    <RoomItem    setRoomId={setRoomId} setUserId={setUserId} user={user} key={user.id} />
  ));
  const roomLi = rooms.map((room) => (
    <GroupRoomItem setUserId={setUserId}  setRoomId={setRoomId} room={room} key={room.id} />
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
        <div class="container-fluid h-100">
          <div class="row justify-content-left h-100">
            <div>
              <div class="card mb-sm-1 mb-md-0 contacts_card">
                {" "}
                <Link to="/createGroups">
                  <i class="fas fa-users"></i>{" "}
                </Link>{" "}
                <div class="card-header">
                  <input type="text" placeholder="Search..." />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomList;
