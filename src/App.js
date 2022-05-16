import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Rides from './pages/Rides/Rides';
import ModalForm from './components/ModalForm';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/rides' component={Rides} />
        <Route path='/modal' component={ModalForm} />
        <Route path='/dashboard' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
