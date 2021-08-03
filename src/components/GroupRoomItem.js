import { useReducer } from "react";
import { useSelector } from "react-redux";
import "../ChatList.css";
import DeleteRooms from "./DeleteRooms";
const GroupRoomItem = ({ room, user, setRoomId, setUserId }) => {
  const rooms = useSelector((state) => state.rooms.rooms);
  const x = () => {
    setRoomId(room.id);
    setUserId(null);
  };

  const s = rooms
    .flat()
    .map((room) => room.Users.map((_user) => _user.id))
    .flat();
  const v = s.flat().map((n)=>n===user.id)

  console.log(v);
  return (
    <>
      {v ? (
        <ui class="contacts">
          <li class="active">
            <div class="d-flex bd-highlight" onClick={x}>
              <div class="avatar-icon">
                <img alt={room.name} src={room.image} />
              </div>
              <div class="user_info">
                <span>{room.name}</span>
              </div>{" "}
              <DeleteRooms roomId={room.id} />
            </div>
          </li>
        </ui>
      ) : (
        ""
      )}
    </>
  );
};

export default GroupRoomItem;
