import "../ChatList.css";
import { Link } from "react-router-dom";

const RoomItem = (props) => {
  const room = props.room;
  // const message = props.message;
// console.log(message)
  return (<>
    <ui class="contacts">
      <Link to="/rooms">
        <li class="active">
          <div class="d-flex bd-highlight">
            {/* <div class="avatar-icon">
              <img alt={room.name} src={user.image} />
            </div> */}
            <div class="user_info">
              <span>{room.name}</span>
            </div>
          </div>
        </li>
      </Link>
    </ui>




 </>  


  );
};

export default RoomItem;
