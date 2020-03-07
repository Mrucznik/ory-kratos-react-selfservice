import React from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {Link} from "react-router-dom";

type RegistrationProps = {
    formAction: string
}

const Registration = (props: RegistrationProps) => {
    return (
        <div className="auth">
            <div className="container">
                <IconLogo/>
                <h5 className="subheading">Welcome to SecureApp! <br/>
                    Use the form below to sign up:</h5>

                <FormErrors className="overview-form-errors" errors={[{"message": "test"}]}/>

                <form action={props.formAction} method="POST">
                    <FormFields formFields={[]}/>
                    <button type="submit">Sign Up</button>
                </form>

                <hr className="divider"/>

                    <div className="alternative-actions">
                        <Link to="/auth/login">Already have an account? Log in instead</Link>
                    </div>
            </div>
        </div>

);
};

export default Registration;
