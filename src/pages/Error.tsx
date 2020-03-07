import React from 'react';
import IconLogo from "../components/icons/IconLogo";

const Error = () => {
    return (
        <div className="content">
            <div className="header">
                <IconLogo/>
                <div className="logout"><a href="{{logoutUrl}}">LOG OUT</a></div>
            </div>
            <div className="container">
                <h1>An error occurred</h1>
                <pre><code>{{message}}</code></pre>
            </div>
        </div>
    );
};

export default Error;
