import RoomList from "./RoomList";
import ChatList from "./ChatList";
import { DivTow } from "../Styles";
import { useState } from "react";

const Combine = () => {

  const [userId,setUserId]=useState(null)
  const [roomId,setRoomId]=useState(null)
  return (
    <DivTow>
      <RoomList setRoomId={setRoomId} setUserId={setUserId} />

      {userId&&<ChatList userId={userId}/>}
      
      {roomId&&<ChatList roomId={roomId}/>}
      
    </DivTow>
  );
};

export default Combine;
