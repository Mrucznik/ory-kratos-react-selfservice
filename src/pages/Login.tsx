import React from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";

const Login = () => {
    return (
        <div className="auth">
            <div className="container">
                <IconLogo/>
                <h5 className="subheading">Welcome to this example login screen!</h5>

                <FormErrors className="overview-form-errors"/>

                <form action="{{formAction}}" method="POST">
                    <FormFields/>
                    <button type="submit">Sign In</button>
                </form>

                <hr className="divider"/>

                    <div className="alternative-actions">
                        {/*<a href="{{baseUrl}}auth/registration">Recover password</a>*/}
                        <a href="{{baseUrl}}auth/registration">Register new account</a>
                    </div>
            </div>
        </div>

);
};

export default Login;
