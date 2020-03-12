import React, {useEffect, useState} from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import {sortFormFields} from "../util/translations";
import {useQuery} from "../util/UseQuery";
import config from "../config";

const Registration = () => {
    const query = useQuery();
    const [response, setResponse] = useState({ methods: {password: {config: {errors: [], action: '', fields: []}}}});
    const request = query.get('request');

    useEffect(() => {
        fetch(`${config.kratos.public}/self-service/browser/flows/requests/registration?request=${request}`)
            .then(res => res.json())
            .then((data) => setResponse(data))
            .catch(console.log);
    }, [request]);

    if (useQuery().get('request') == null) {
        window.location.href = `${config.kratos.public}/self-service/browser/flows/registration`;
        return (<section>No request param in query - redirecting...</section>)
    } else {
        return (
            <div className="auth">
                <div className="container">
                    <IconLogo/>
                    <h5 className="subheading">Welcome to SecureApp! <br/>
                        Use the form below to sign up:</h5>

                    <FormErrors className="overview-form-errors"
                                errors={response.methods.password.config.errors || []}/>

                    <form action={response.methods.password.config.action} method="POST">
                        <FormFields formFields={response.methods.password.config.fields.sort(sortFormFields)}/>
                        <button type="submit">Sign Up</button>
                    </form>

                    <hr className="divider"/>

                    <div className="alternative-actions">
                        <a href={`${config.kratos.public}/self-service/browser/flows/login`}>Already have an account? Log in instead</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Registration;
