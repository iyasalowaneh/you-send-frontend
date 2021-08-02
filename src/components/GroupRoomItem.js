import "../ChatList.css";

const GroupRoomItem = ({room,setRoomId,setUserId}) => {

  return (


    <>
      <ui class="contacts">
          <li class="active">
          <div class="d-flex bd-highlight" onClick={() => setRoomId(room.id)}>
              {/* <div class="avatar-icon">
              <img alt={room.name} src={user.image} />
            </div> */}
              <div class="user_info">
                <span>{room.name}</span>
              </div>
            </div>
          </li>
      </ui>
    </>
  );
};

export default GroupRoomItem;
