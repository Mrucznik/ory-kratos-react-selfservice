import React from 'react';

const Login = () => {
    return (
        <div className="auth">
            <div className="container">
                {{ > icon_logo}}
                <h5 className="subheading">Welcome to this example login screen!</h5>

                {{ > formErrors className="overview-form-errors"}}

                <form action="{{formAction}}" method="POST">
                    {{ > formFields}}
                    <button type="submit">Sign In</button>
                </form>

                <hr className="divider">

                    <div className="alternative-actions">
                        <!-- <a href="{{baseUrl}}auth/registration">Recover password</a> -->
                        <a href="{{baseUrl}}auth/registration">Register new account</a>
                    </div>
            </div>
        </div>

);
};

export default Login;
