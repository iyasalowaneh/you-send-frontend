import "../Chat.css";

const ChatItem = (props) => {
  const message = props.message;

  return (
    <div class="d-flex justify-content-end mb-4">
      <p class="msg_cotainer_send">
        {message.content}

        <p class="msg_time_send">8:55 AM, Today</p>
      </p>
      <img src={message.image} />
      <img
        class="rounded-circle user_img_msg"
        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
      />
    </div>
  );
};

export default ChatItem;
