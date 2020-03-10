import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import config from '../config';

function isLogin() {
  return false;
}

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to sign in page
    <Route {...rest} render={props => (
      isLogin() ?
        <Component {...props} />
        : <Redirect to={`${config.kratos.public}/self-service/browser/flows/login`}/>
    )} />
  );
};

export default PrivateRoute;
