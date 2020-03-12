import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import FormErrors from "../components/FormErrors";
import {ProfileManagementRequest} from "@oryd/kratos-client";
import {useQuery} from "../util/UseQuery";
import config from "../config";
import RedirectUrl from "../components/RedirectURL";
import KratosForm from "../components/KratosForm";

const Profile = () => {
    const query = useQuery();
    const [response, setResponse] = useState(new ProfileManagementRequest());
    const request = query.get('request');

    useEffect(() => {
        fetch(`${config.kratos.public}/self-service/browser/flows/requests/profile?request=${request}`)
            .then(res => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then(data => setResponse(data))
            .catch((reason => {
                console.log(reason)
            }));
    }, []);

    if (useQuery().get('request') == null) {
        return (<RedirectUrl to={`${config.kratos.public}/self-service/browser/flows/profile`}/>)
    } else {
        return (
            <div className="content">
                <Header/>
                {
                    response.form && (
                        <div className="container">
                            <h4>User settings</h4>
                            <FormErrors className="overview-form-errors" errors={response.form.errors}/>
                            <form action={response.form.action} method={response.form.method}>
                                {
                                    response.form.fields.map((item) => <KratosForm key={item.name} field={item}/>)
                                }
                                <button type="submit">Update user information</button>
                            </form>
                        </div>
                    )
                }
            </div>
        );
    }
};

export default Profile;
