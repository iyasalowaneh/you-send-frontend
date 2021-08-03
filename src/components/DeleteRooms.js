import { deleteRoom } from "../store/actions/roomListActions";
import { useDispatch } from "react-redux";

const DeleteRooms = (props) => {
  const dispatch = useDispatch();
  return (
    <i
      class="fas fa-user-minus"
      onClick={() => dispatch(deleteRoom(props.userId))}
    ></i>
  );
};

export default DeleteRooms;
