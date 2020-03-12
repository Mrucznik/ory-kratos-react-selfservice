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
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import Debug from "./pages/Debug";
import Registration from "./pages/Registration";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/auth/registration" component={Registration}/>
                    <Route path="/error" component={Error}/>
                    <Route path="/verify" component={Verify}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/debug" component={Debug}/>
                    <Route exact path="/" component={Dashboard}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
