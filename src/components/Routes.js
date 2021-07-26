import { Route, Switch } from "react-router";
//Home components
// import Home from "./Home";
// import Signup from "./users/Signup";
// import Signin from "./users/Signin";
import { useSelector } from "react-redux";

function Routes(props) {
  const user = useSelector((state) => state.users.users);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
