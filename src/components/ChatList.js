import "../Chat.css";
const ChatList = () => {
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
        <div class="row justify-content-center h-100">
          <div class="col-md-4 col-xl-3 chat"></div>
          <div class="col-md-8 col-xl-6 chat">
            <div class="card">
              <div class="card-header msg_head">
                <div class="d-flex bd-highlight">
                  <div class="heading-avatar-icon">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      class="rounded-circle user_img"
                    />{" "}
                    <span class="online_icon"></span>
                    <span>Chat with Ali </span>
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
                <div class="d-flex justify-content-start mb-4">
                  <div class="heading-avatar-icon">
                    <img
                      src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                      class="rounded-circle user_img_msg"
                    />
                    <p class="msg_cotainer">Hi, how are you samim?</p>
                  </div>
                </div>{" "}
                <div class="d-flex justify-content-end mb-4">
                  <p class="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <p class="msg_time_send">8:55 AM, Today</p>
                  </p>
                  <img
                    class="rounded-circle user_img_msg"
                    src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                  />
                </div>
              </div>

              <div class="card-footer">
                <div class="input-group">
                  <i class="fas fa-paperclip"></i>

                  <textarea
                    name=""
                    class="form-control type_msg"
                    placeholder="Type your message..."
                  ></textarea>
                  <i class="fas fa-location-arrow"></i>
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
