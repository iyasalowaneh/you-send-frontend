import "../ChatList.css";

const GroupRoomItem = ({room,setRoomId,setUserId}) => {

const x =()=>{
  setRoomId(room.id)
  setUserId(null)
}


  return (


    <>
      <ui class="contacts">
          <li class="active">
          <div class="d-flex bd-highlight" onClick={x}>
              <div class="avatar-icon">
              <img alt={room.name} src={room.image} />
            </div>
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
