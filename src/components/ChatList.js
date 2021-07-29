import "../Chat.css";
import ChatItem from "./ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addMessage } from "../store/actions/messageAction";
import { useState } from "react";

const ChatList = () => {
  const messages = useSelector((state) => state.messages.messages);
  console.log(messages)


  const ChatListOne = messages.map((message) => (
    <ChatItem message={message} key={message.id} />
  ));

  const users = useSelector((state) => state.userReducer.users);
  // const messageSlug = useParams().messageSlug;
  // const roomSlug = useParams().roomSlug;


  // rooms.find((room) => room.slug === roomSlug).id
  
  const [message, SetMessage] = useState(
     {
          userId:1 ,
          content: "",
        }
  );
  const dispatch = useDispatch();
  const handleChange = (event) => {
    SetMessage({ ...message, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
     dispatch(addMessage(message));
  }

  return (
//     <>
//       <head>
//         <title>Chat</title>
//         <link
//           rel="stylesheet"
//           href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
//           integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
//           crossorigin="anonymous"
//         />
//         <link
//           rel="stylesheet"
//           href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
//           integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
//           crossorigin="anonymous"
//         />
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
//         />
//         <script
//           type="text/javascript"
//           src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js"
//         />
//       </head>

//       <div class="container-fluid h-100">
//         <div class="row justify-content-center h-100">
//           <div class="col-md-4 col-xl-3 chat"></div>
//           <div class="col-md-8 col-xl-6 chat">
//             <div class="card">
//               <div class="card-header msg_head">
//                 <div class="d-flex bd-highlight">
//                   <div class="heading-avatar-icon">
//                     <img
//                       src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
//                       class="rounded-circle user_img"
//                     />
//                     <span class="online_icon"></span>
//                     <span>Chat with Ali </span>
//                   </div>
//                   <div class="video_cam">
//                     <span>
//                       <i class="fas fa-video"></i>
//                     </span>
//                     <span>
//                       <i class="fas fa-phone"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <span id="action_menu_btn">
//                   <i class="fas fa-ellipsis-v"></i>
//                 </span>
//                 <div class="action_menu">
//                   <ul>
//                     <li>
//                       <i class="fas fa-user-circle"></i> View profile
//                     </li>
//                     <li>
//                       <i class="fas fa-users"></i> Add to close friends
//                     </li>
//                     <li>
//                       <i class="fas fa-plus"></i> Add to group
//                     </li>
//                     <li>
//                       <i class="fas fa-ban"></i> Block
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div class="card-body msg_card_body">
//                 <div class="d-flex justify-content-start mb-4">
//                   <div class="heading-avatar-icon">
//                     <img
//                       src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
//                       class="rounded-circle user_img_msg"
//                     />
//                     <p class="msg_cotainer">ghj</p>
//                   </div>
//                 </div>
//                 {ChatListOne}



//               </div>

//               <div class="card-footer">
//                 <div class="input-group">
//                   <i class="fas fa-paperclip"></i>
// <form onSubmit={handleSubmit}>
//                   <textarea
//                             onChange={handleChange}

//                     name="content"
//                     value={message.content}
//                     class="form-control type_msg"
//                     placeholder="Type your message..."
//                   ></textarea>
//                   <i type="submit" class="fas fa-location-arrow"></i>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
      <form onSubmit={handleSubmit}>
      form
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
           message
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter the product name"
          name="content"
          onChange={handleChange}
          value={message.content}
        />
      </div>
      
     
      
        
      <button type="submit"> Submit</button>
    </form>
    // </>
  );
};
export default ChatList;
