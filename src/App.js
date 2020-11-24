import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users}></Route>
          <Route path="/palces/new" component={NewPlace}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
