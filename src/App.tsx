import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hello from "./pages/Hello";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Hello}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
