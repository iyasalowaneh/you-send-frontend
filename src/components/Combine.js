import RoomList from "./RoomList";
import ChatList from "./ChatList";
import { DivTow } from "../Styles";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMessage } from "../store/actions/messageAction";
const Combine = () => {
  const [refresh, setRefresh] = useState();
  const [userId,setUserId]=useState(null)
  const [roomId,setRoomId]=useState(null)
const dispatch = useDispatch()

  useEffect(() => {
      const intervalID = setInterval(() => {
        console.log("here");
        dispatch(fetchMessage());
      }, 3000);
      return () => clearInterval(intervalID);
    }, []);
  return (
    <DivTow>
      <RoomList setRoomId={setRoomId} setUserId={setUserId} />

      {userId&&<ChatList userId={userId}/>}
      
      {roomId&&<ChatList roomId={roomId}/>}
      
    </DivTow>
  );
};

export default Combine;
