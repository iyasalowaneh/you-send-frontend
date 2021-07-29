import RoomList from "./RoomList";
import ChatList from "./ChatList";
import { DivOne, DivTow } from "../Styles";

const Combine = (props) => {
  return (
    <DivTow>
      <RoomList />

      <ChatList />
    </DivTow>
  );
};

export default Combine;
