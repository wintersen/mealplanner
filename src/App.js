import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Cookbook from './components/Cookbook/Cookbook';
import Recipe from './components/Cookbook/Recipe';

import Dashboard from './components/Dashboard/Dashboard';
import TopNav from './components/Navbars/TopNav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App w-screen h-screen flex flex-col">
        <TopNav />
        <Switch>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/cookbooks" component={Cookbook}></Route>
          <Route path="/recipe/:id" component={Recipe}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
