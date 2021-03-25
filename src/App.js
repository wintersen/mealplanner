import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AddRecipe from './components/Cookbook/AddRecipe';
import Cookbook from './components/Cookbook/Cookbook';
import Recipe from './components/Cookbook/Recipe';

import Dashboard from './components/Dashboard/Dashboard';
import Event from './components/Event/Event';
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
          <Route path="/cookbook/:id" component={Cookbook}></Route>
          <Route path="/recipe/:id" component={Recipe}></Route>
          <Route path="/event/:id" component={Event}></Route>
          <Route path="/addRecipe/:cookbookid" component={AddRecipe}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
