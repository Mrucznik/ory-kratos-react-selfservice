import React from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {Link} from "react-router-dom";

type LoginProps = {
    formAction: string
}

const Login = (props: LoginProps) => {
    return (
        <div className="auth">
            <div className="container">
                <IconLogo/>
                <h5 className="subheading">Welcome to this example login screen!</h5>

                <FormErrors className="overview-form-errors" errors={[{"message": "test"}]}/>

                <form action={props.formAction} method="POST">
                    <FormFields formFields={[]}/>
                    <button type="submit">Sign In</button>
                </form>

                <hr className="divider"/>

                    <div className="alternative-actions">
                        {/*<Link to="/auth/registration">Recover password</Link>*/}
                        <Link to="/auth/registration">Register new account</Link>
                    </div>
            </div>
        </div>

);
};

export default Login;
