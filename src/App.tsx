import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import './styles/Auth.css'
import './styles/Form.css'
import './styles/Typography.css'
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";
import Debug from "./pages/Debug";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/registration" component={Registration}/>
            <Route path="/error" component={Error}/>
            <Route path="/verify" component={Verify}/>
            <Route path="/logout" component={Logout}/>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile}/>
            <PrivateRoute path="/debug" component={Debug}/>
            <Route path="/" exact component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
