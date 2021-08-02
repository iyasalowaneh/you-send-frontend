import "../ChatList.css";

const RoomItem = ({setUserId,user,setRoomId}) => {
  const y =()=>{
    setRoomId(null)
    setUserId(user.id)
  }

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
            </div>
            
          </div>
        </li>
      </ui>

      {/*  
<div class="d-flex justify-content-end mb-4">
<p class="msg_cotainer_send">
{user.name}
  <p class="msg_time_send">8:55 AM, Today</p>
</p>
<img
  class="rounded-circle user_img_msg"
  src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
/>
</div> */}
    </>
  );
};

export default RoomItem;
