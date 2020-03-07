import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Registration}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
