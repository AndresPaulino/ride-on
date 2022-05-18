import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Rides from './pages/Rides/Rides';
import ModalForm from './components/ModalForm';
import Dashboard from './pages/Dashboard/Dashboard';
import RideDetails from './pages/RideDetails/RideDetails';
import { StateContext } from './context/StateContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <StateContext>
          <Route path='/home' component={Home} />
          <Route exact path='/rides' component={Rides} />
          <Route path='/rides/:id' component={RideDetails} />
          <Route path='/modal' component={ModalForm} />
          <Route path='/dashboard' component={Dashboard} />
        </StateContext>
      </Switch>
    </Router>
  );
}

export default App;
