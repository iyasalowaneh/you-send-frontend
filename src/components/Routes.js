import { Route, Switch } from "react-router";
//Home components
//import Home from "./Home";
import Signup from "./Sginup";
import Verify from "./Verify";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import RoomList from "./RoomList";
import ChatList from "./ChatList";
import Combine from "./Combine";

function Routes(props) {
  // const user = useSelector((state) => state.users.users);

  return (
    <Switch>
      {/* <Route  path="/:userId">
        <Profile />
      </Route> */}
      <Route path="/rooms/:userSlug">
        <ChatList />
      </Route>
    <Route path="/combine">
        <Combine />
      </Route>
      <Route path="/rooms">
        <RoomList />
      </Route>

      
      <Route path="/Verify">
        <Verify />
      </Route>

      <Route exact path="/">
        <Signup />
      </Route>
    </Switch>
  );
}
export default Routes;
