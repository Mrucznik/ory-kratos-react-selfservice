import React, {useEffect, useState} from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {Link} from "react-router-dom";
import config from "../config";
import useQuery from "../util/userQuery";

type RegistrationProps = {
    formAction: string
}

const Registration = (props: RegistrationProps) => {
    const query = useQuery();
    const [response, setResponse] = useState({ methods: {password: {config: {errors: [], action: '', fields: []}}}});
    const request = query.get('request');

    //todo: redirect to /.ory/kratos/public/self-service/browser/flows/login on empty request

    useEffect(() => {
        fetch(`${config.kratos.public}/self-service/browser/flows/requests/registration?request=${request}`)
            .then(res => res.json())
            .then((data) => setResponse(data))
            .catch(console.log);
    }, []);

    return (
        <div className="auth">
            <div className="container">
                <IconLogo/>
                <h5 className="subheading">Welcome to SecureApp! <br/>
                    Use the form below to sign up:</h5>

                <FormErrors className="overview-form-errors" errors={response.methods.password.config.errors || []}/>

                <form action={response.methods.password.config.action} method="POST">
                    <FormFields formFields={response.methods.password.config.fields}/>
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
