import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users}></Route>
          <Route path="/:userId/places" component={UserPlaces} />
          <Route exact path="/places/new" component={NewPlace}></Route>
          <Route path="/places/:placeId" component={UpdatePlace}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
