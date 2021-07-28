import { Route, Switch } from "react-router";

//Components
//import Home from "./Home"; //Remove unused import
import Signup from "./Sginup";
import Verify from "./Verify";
import Profile from "./Profile"; //Remove unused import
import { useSelector } from "react-redux"; //Remove unused import
import RoomList from "./RoomList";
import ChatList from "./ChatList";

//Remove unused props
function Routes(props) {
  // const user = useSelector((state) => state.users.users); //Remove unused code

  return (
    <Switch>
      {/*Remove unused route */}
      {/* <Route  path="/:userId">
        <Profile />
      </Route> */}

      <Route path="/RoomList">
        <RoomList />
      </Route>

      <Route path="/ChatList">
        <ChatList />
      </Route>
      {/*Change to /verify */}
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
