import RoomList from "./RoomList";
import ChatList from "./ChatList";
import { DivOne, DivTow} from "../Styles";

const Combine = (props) => {
 


  return (
<> 
      <DivOne>
<RoomList/>
          <DivTow>

 <ChatList/>
</DivTow>

</DivOne>
 
       </> 
             )
};

export default Combine;
