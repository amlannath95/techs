import './App.css';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Signin from './Signin';
// import Form from './Form';
// import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Signup}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/signin" component={Signin}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;