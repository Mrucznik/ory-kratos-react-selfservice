import React from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";

const Registration = () => {
    return (
        <div className="auth">
            <div className="container">
                <IconLogo/>
                <h5 className="subheading">Welcome to SecureApp! <br/>
                    Use the form below to sign up:</h5>

                <FormErrors className="overview-form-errors"/>

                <form action="{{ formAction }}" method="POST">
                    <FormFields/>
                    <button type="submit">Sign Up</button>
                </form>

                <hr className="divider"/>

                    <div className="alternative-actions">
                        <a href="{{baseUrl}}auth/login">Already have an account? Log in instead</a>
                    </div>
            </div>
        </div>

);
};

export default Registration;
