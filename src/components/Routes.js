import { Route, Switch } from "react-router";
//Home components
 //import Home from "./Home";
 import Signup from "./Sginup";
 import Verify from "./Verify";
import { useSelector } from "react-redux";

function Routes(props) {
 // const user = useSelector((state) => state.users.users);

  return (
    <Switch>
      <Route  path="/Verify">
        <Verify />
      </Route>

      <Route exact path="/">
        <Signup />
      </Route>
    </Switch> 
  );
}
export default Routes;
