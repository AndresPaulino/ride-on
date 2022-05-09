import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';


function App() {
  return (
    <Router>
      {/* <NavigationBar /> */}
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component={signup} /> */}
        </Switch>
      </Router>
  );
}

export default App;
