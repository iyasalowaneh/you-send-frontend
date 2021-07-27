import "../ChatList.css";
const RoomItem = (props) => {
  const user = props.user;
  return (
    <ui class="contacts">
    <li class="active">
      <div class="d-flex bd-highlight">
      <div class="avatar-icon">
        <img alt={user.name} src={user.image} />
        </div>
        <div class="user_info">
          <span>{user.name}</span>
          <p>Kalid is online</p>
        </div>
      </div>
    </li>

  


    </ui>
  );
};

export default RoomItem;
