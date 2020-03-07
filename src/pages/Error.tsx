import React from 'react';

const Error = () => {
    return (
        <div className="content">
            <div className="header">
                {{ > icon_logo}}
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
