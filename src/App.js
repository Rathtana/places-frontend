import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users}></Route>
        <Route path="/palces/new" component={NewPlace}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
