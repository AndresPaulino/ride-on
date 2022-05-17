import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Rides from './pages/Rides/Rides';
import ModalForm from './components/ModalForm';
import Dashboard from './pages/Dashboard/Dashboard';
import {StateContext} from './context/StateContext';

function App() {
  return (
    <StateContext>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
          <Route path='/rides' component={Rides} />
          <Route path='/modal' component={ModalForm} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </StateContext>
  );
}

export default App;
