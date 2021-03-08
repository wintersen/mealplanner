import { BrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import TopNav from './components/Navbars/TopNav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
