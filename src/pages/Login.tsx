import React, {useEffect, useState} from 'react';
import IconLogo from "../components/icons/IconLogo";
import FormFields from "../components/FormFields";
import FormErrors from "../components/FormErrors";
import config from "../config";
import {sortFormFields} from "../util/translations";
import {useQuery} from "../util/UseQuery";

const Login = () => {
    const query = useQuery();
    const [response, setResponse] = useState({methods: {password: {config: {errors: [], action: '', fields: []}}}});
    const request = query.get('request');

    useEffect(() => {
        fetch(`${config.kratos.public}/self-service/browser/flows/requests/login?request=${request}`)
            .then(res => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then((data) => setResponse(data))
            .catch((reason => {
                console.log(reason)
            }));
    }, [request]);

    if (useQuery().get('request') == null) {
        window.location.href = `${config.kratos.public}/self-service/browser/flows/login`;
        return (<section>No request param in query - redirecting...</section>)
    } else {
        return (
            <div className="auth">
                <div className="container">
                    <IconLogo/>
                    <h5 className="subheading">Welcome to this example login screen!</h5>

                    <FormErrors className="overview-form-errors"
                                errors={response.methods.password.config.errors || []}/>

                    <form action={response.methods.password.config.action} method="POST">
                        <FormFields formFields={response.methods.password.config.fields.sort(sortFormFields)}/>
                        <button type="submit">Sign In</button>
                    </form>

                    <hr className="divider"/>

                    <div className="alternative-actions">
                        {/*<Link to="/auth/registration">Recover password</Link>*/}
                        <a href={`${config.kratos.public}/self-service/browser/flows/registration`}>Register new account</a>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;
