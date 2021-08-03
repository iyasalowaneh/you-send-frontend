import "../Chat.css";
import ChatItem from "./ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/actions/messageAction";
import { useState } from "react";
import GroupChatItem from "./GroupChatItem";
import { addMessagetoGroup } from "../store/actions/messageAction";
const ChatList = ({ userId, roomId }) => {
  const messages = useSelector((state) => state.messages.messages);
  const rooms = useSelector((state) => state.rooms.rooms);
  const users = useSelector((state) => state.userReducer.users);
  const user = useSelector((state) => state.users.user);

  let userMessage = messages.filter(
    (message) =>
      [userId, user.id].includes(message.senderId) &&
      [userId, user.id].includes(message.reciverId)
  );
  const userImage = users
    .filter((user) => user.id === userId)
    .map((user) => user.image);
  const u = users
    .filter((user) => user.id === userId)
    .map((user) => user.image);
  const groupImage = rooms
    .filter((room) => room.id === roomId)
    .map((room) => room.image);
  userMessage = userMessage.map((message) =>
    message ? (
      <ChatItem userImage={userImage} message={message} key={message.id} user={user} key={user.id} />
    ) : (
      ""
    )
  );
  let roomMessage = (roomId) => {
    return messages.filter((message) => message.roomId === roomId);
  };
  const room = rooms.find((room) => room.id === roomId);
  let groupMessages = roomMessage(room?.id);

  roomMessage = groupMessages.map((message) =>
    message ? <GroupChatItem message={message} key={message.id} /> : ""
  );

  const userName = users
    .filter((user) => user.id === userId)
    .map((user) => user.name);

  const groupName = rooms
    .filter((room) => room.id === roomId)
    .map((room) => room.name);
  const [message, SetMessage] = useState({
    reciverId: userId,
    content: "",
    image:""
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    SetMessage({ ...message, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addMessage(message));
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    dispatch(addMessagetoGroup(message, roomId));
  };

  const handleImage = (event) => {
    SetMessage({ ...message, image: event.target.files[0] });
  };

  return (
    <>
      <head>
        <title>Chat</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossorigin="anonymous"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"
        />
      </head>

      <div class="container-fluid h-100">
        <div class="row justify-left ">
          <div class="col-md-1 col-xl-1 chat"></div>
          <div class="col-md-4 col-xl-11 chat">
            <div class="card">
              <div class="card-header msg_head">
                <div class="d-flex bd-highlight">
                  <div class="heading-avatar-icon">
                    {room && (
                      <img src={groupImage} class="rounded-circle user_img" />
                    )}
                    {!room && (
                      <img src={userImage} class="rounded-circle user_img" />
                    )}

                    <span>
                      Chat with {userName} {groupName}
                    </span>
                  </div>
                  <div class="video_cam">
                    <span>
                      <i class="fas fa-video"></i>
                    </span>
                    <span>
                      <i class="fas fa-phone"></i>
                    </span>
                  </div>
                </div>
                <span id="action_menu_btn">
                  <i class="fas fa-ellipsis-v"></i>
                </span>
                <div class="action_menu">
                  <ul>
                    <li>
                      <i class="fas fa-user-circle"></i> View profile
                    </li>
                    <li>
                      <i class="fas fa-users"></i> Add to close friends
                    </li>
                    <li>
                      <i class="fas fa-plus"></i> Add to group
                    </li>
                    <li>
                      <i class="fas fa-ban"></i> Block
                    </li>
                  </ul>
                </div>
              </div>

              <div class="card-body msg_card_body">
                <div class="d-flex justify-content-start mb-4"></div>
                {userMessage}
                {roomMessage}
              </div>

              <div class="card-footer">
                <div class="input-group">
                 <i class="fas fa-paperclip">
                  <input   type="file"
                    name="image"
                    onChange={handleImage}  ></input></i>

                  {userId > 0 && (
                    <form onSubmit={handleSubmit}>
                      <textarea
                        onChange={handleChange}
                        name="content"
                        value={message.content}
                        class="form-control type_msg"
                        placeholder="Type your message..."
                      ></textarea>
                      <button
                        type="submit"
                        class="fas fa-location-arrow"
                      ></button>
                    </form>
                  )}

                  {roomId > 0 && (
                    <form onSubmit={handleSubmit2}>
                      <textarea
                        onChange={handleChange}
                        name="content"
                        value={message.content}
                        class="form-control type_msg"
                        placeholder="Type your message..."
                      ></textarea>
                      <button
                        type="submit"
                        class="fas fa-location-arrow"
                      ></button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatList;
