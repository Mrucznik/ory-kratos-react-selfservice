import React, {useEffect, useState} from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {Link, Redirect, useLocation} from "react-router-dom";

type LoginProps = {
    formAction: string
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = (props: LoginProps) => {
    const query = useQuery();
    const [formFields, setFormFields] = useState({ methods: {password: {config: {fields: []}}}});
    const request = query.get('request');

    useEffect(() => {
        fetch(`http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/login?request=${request}`)
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
