import "../ChatList.css";
import { Link } from "react-router-dom";

const RoomItem = (props) => {
  const user = props.user;
  // const message = props.message;
// console.log(message)
  return (<>
    <ui class="contacts">
      <Link to="/rooms">
        <li class="active">
          <div class="d-flex bd-highlight">
            <div class="avatar-icon">
              <img alt={user.name} src={user.image} />
            </div>
            <div class="user_info">
              <span>{user.name}</span>
              <p>{user.status}</p>
            </div>
          </div>
        </li>
      </Link>
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
