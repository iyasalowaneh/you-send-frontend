import {deleteUser} from "../store/actions/roomActions"
import { useDispatch } from "react-redux";

const DeleteUser = (props) => {
  const dispatch = useDispatch();
  return (
    <i class="fas fa-user-minus" onClick={() => dispatch(deleteUser(props.userId))}>
    </i>
  );
};


export default DeleteUser;