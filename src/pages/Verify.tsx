import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import FormErrors from "../components/FormErrors";
import KratosForm from "../components/KratosForm";
import {useQuery} from "../util/UseQuery";
import config from "../config";
import RedirectUrl from "../components/RedirectURL";
import {VerificationRequest} from "@oryd/kratos-client/dist/model/verificationRequest";

const Verify = () => {
    const query = useQuery();
    const [response, setResponse] = useState(new VerificationRequest());
    const request = query.get('request');

    useEffect(() => {
        if(request !== null) {
            fetch(`${config.kratos.public}/self-service/browser/flows/requests/verification?request=${request}`)
                .then(res => {
                    if (!res.ok) throw res;
                    return res.json();
                })
                .then(data => setResponse(data))
                .catch(console.log);
        }
    }, [request]);

    if(request === null) {
        return <RedirectUrl to={`${config.kratos.public}/self-service/browser/flows/verification/init/email`}/>
    } else {
        return (
            <div className="content">
                <Header/>
                {
                    response.form && (
                        <div className="container">
                            <h4>Resend verification code</h4>

                            <FormErrors className="overview-form-errors" errors={response.form?.errors}/>

                            <form action={response.form.action} method={response.form.method}>
                                {
                                    response.form.fields.map((item) => <KratosForm field={item}/>)
                                }
                                <button type="submit">Resend verification code</button>
                            </form>
                        </div>
                    )
                }
            </div>
        );
    }
};

export default Verify;
