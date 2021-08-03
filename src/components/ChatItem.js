import { useReducer } from "react";
import "../Chat.css";
const ChatItem = (props) => {
  const message = props.message;
  const userImage = props.userImage;
  const user = props.user;
  return (
    <>
      {user.id !== message.senderId && (
        <div class="heading-avatar-icon">
          <p class="msg_cotainer"> {message.content}</p>
        </div>
      )}

      {user.id === message.senderId && (
        <div class="d-flex justify-content-end mb-4">
          <p class="msg_cotainer_send">
            {message.content}
            <div> </div> <p class="msg_time_send">{message.createdAt} </p>
          </p>
          <img src={message.image} />
          <img class="rounded-circle user_img_msg" src={userImage} />
        </div>
      )}
    </>
  );
};

export default ChatItem;
