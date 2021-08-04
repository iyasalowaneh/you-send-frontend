import "../ChatList.css";
import DeleteUser from "./DeleteUser";
import UserUpdate from "./userUpdate";

const RoomItem = ({ setUserId, user, setRoomId   }) => {
  const y = () => {
    setRoomId(null);
    setUserId(user.id);
  };

  return (
    <>
 <ui class="contacts">
        <li class="active">
          <div class="d-flex bd-highlight" onClick={y}>
            <div class="avatar-icon">
              <img src={user.image} />
            </div>
            <div class="user_info">
              <span>{user.name}</span>
              <p>{user.status}</p>
            </div>{" "}
            <DeleteUser userId={user.id} />
          </div>
        </li>
      </ui>

    </>
  );
};

export default RoomItem;
