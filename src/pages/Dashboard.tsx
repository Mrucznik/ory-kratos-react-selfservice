import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import config from "../config";
import {Identity, Session} from "@oryd/kratos-client";

const Dashboard = () => {
    const s = new Session();
    s.identity = new Identity();
    s.identity.traits = [];
    const [session, setSession] = useState(s);
    const [headers, setHeaders] = useState({});
    const [token, setToken] = useState({raw:'', claims: ''});

    useEffect(() => {
        fetch(`${config.kratos.public}/sessions/whoami`)
            .then(res => {
                if (!res.ok) throw res;
                setHeaders(res.headers);
                return res.json();
            })
            .then((data) => setSession(data))
            .catch((reason => {
                console.log(reason)
            }));
    }, []);

    return (
        <div className="content">
            <Header/>
            <div className="container">
                <h4 className="greeting">Welcome back, <span className="user-identifier">
                    {
                        // @ts-ignore
                        session.identity.traits.email
                    }
                </span>!</h4>
                <h5>This example app is secure by default</h5>
                <p>
                    Hello, nice to have you! You signed up with this data:
                </p>
                <pre><code>{JSON.stringify(session.identity.traits, null, 2)}</code></pre>
                <p>
                    Requests passing to your application (and this example) flow
                    through our proxy which you install using the <a href="/">ORY CLI</a>.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
