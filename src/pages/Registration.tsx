import React from 'react';

const Registration = () => {
    return (
        <div className="auth">
            <div className="container">
                {{ > icon_logo}}
                <h5 className="subheading">Welcome to SecureApp! <br/>
                    Use the form below to sign up:</h5>

                {{ > formErrors className="overview-form-errors"}}

                <form action="{{ formAction }}" method="POST">
                    {{ > formFields}}
                    <button type="submit">Sign Up</button>
                </form>

                <hr className="divider">

                    <div className="alternative-actions">
                        <a href="{{baseUrl}}auth/login">Already have an account? Log in instead</a>
                    </div>
            </div>
        </div>

);
};

export default Registration;
