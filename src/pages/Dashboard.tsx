import React from 'react';
import Header from "../components/Header";

const Dashboard = () => {
    return (
        <div className="content">
            <Header/>
            <div className="container">
                <h4 className="greeting">Welcome back, <span
                    className="user-identifier">{/*session.identity.traits.email*/}</span>!</h4>
                <h5>This example app is secure by default</h5>
                <p>
                    Hello, nice to have you! You signed up with this data:
                </p>
                <pre><code>{/*jsonPretty session.identity.traits*/}</code></pre>
                <p>
                    Requests passing to your application (and this example) flow
                    through our proxy which you install using the <a href="/">ORY CLI</a>.
                </p>
                <p>
                    The proxy ensures that any request attempting to access
                    protected URLs, resources, ... is authorized to do so. When that's the case,
                    the headers coming to your app will include the HTTP <code>Authorization</code> Header:
                </p>
                <pre><code>{/*headers*/}</code></pre>

                <h2>Session without effort</h2>
                <p>
                    The token in that HTTP Authorization Header is a <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">JSON Web
                    Token</a>,
                    cryptographically signed by ORY. Once decoded, the session information is revealed. No REST requests
                    needed.
                    No SDKs required. Simple, fast, and secure.
                </p>
                <p>The raw JSON Web Token included in the header is:</p>
                <pre><code>{/*token.raw*/}</code></pre>
                <p>The parsed representation is:</p>
                <pre><code>{/*jsonPretty token.claims*/}</code></pre>
            </div>
        </div>
    );
};

export default Dashboard;
