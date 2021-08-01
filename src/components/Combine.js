import RoomList from "./RoomList";
import ChatList from "./ChatList";
import { DivOne, DivTow } from "../Styles";
import { useState } from "react";

const Combine = (props) => {

const [userId,setUserId]=useState(null)

console.log(userId)
  return (
    <DivTow>
      <RoomList setUserId={setUserId} />

      {userId&&<ChatList userId={userId}/>}
    </DivTow>
  );
};

export default Combine;
