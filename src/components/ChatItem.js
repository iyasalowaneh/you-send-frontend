import { useReducer } from "react";
import "../Chat.css";

const ChatItem = (props) => {
  const message = props.message;
  const userImage = props.userImage;

  return (
    <>

      <div class="heading-avatar-icon">
        <p class="msg_cotainer"> {message.content}</p>
      </div>
      <div class="d-flex justify-content-end mb-4">
        <p class="msg_cotainer_send">
          {message.content}

          <p class="msg_time_send">8:55 AM, Today</p>
        </p>
        <img src={message.image} />
        <img class="rounded-circle user_img_msg" src={userImage} />
      </div>
    </>
  );
};

export default ChatItem;
