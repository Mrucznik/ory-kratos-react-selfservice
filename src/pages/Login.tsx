import React, {useEffect, useState} from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {Link} from "react-router-dom";

type LoginProps = {
    formAction: string
}

const Login = (props: LoginProps) => {
    const [formFields, setFormFields] = useState({ methods: {password: {config: {fields: []}}}});

    useEffect(() => {
        fetch('http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/login?request=74a269f1-fc86-44b9-a102-fd2b2ee17f57')
            .then(res => res.json())
            .then((data) => setFormFields(data))
            .catch(console.log);
    }, []);

    return (
        <div className="auth">
            <div className="container">
                <IconLogo/>
                <h5 className="subheading">Welcome to this example login screen!</h5>

                <FormErrors className="overview-form-errors" errors={[]}/>

                <form action={props.formAction} method="POST">
                    <FormFields formFields={formFields.methods.password.config.fields}/>
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
