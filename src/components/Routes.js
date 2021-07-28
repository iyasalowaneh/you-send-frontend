import { Route, Switch } from "react-router";
//Home components
//import Home from "./Home";
import Signup from "./Sginup";
import Verify from "./Verify";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import RoomList from "./RoomList";
import ChatList from "./ChatList";

function Routes(props) {
  // const user = useSelector((state) => state.users.users);

  return (
    <Switch>
      {/* <Route  path="/:userId">
        <Profile />
      </Route> */}

      <Route path="/RoomList">
        <RoomList />
      </Route>

      <Route path="/rooms/:roomSlug">
        <ChatList />
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
