import React, {useEffect, useState} from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {Link, Redirect, useLocation} from "react-router-dom";
import config from "../config";

type LoginProps = {
    formAction: string
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = (props: LoginProps) => {
    const query = useQuery();
    const [formFields, setFormFields] = useState({ methods: {password: {config: {action: '', fields: []}}}});
    const request = query.get('request');

    //todo: redirect to /.ory/kratos/public/self-service/browser/flows/login on empty request

    useEffect(() => {
        fetch(`${config.kratos.public}/self-service/browser/flows/requests/login?request=${request}`)
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

                <form action={formFields.methods.password.config.action} method="POST">
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
