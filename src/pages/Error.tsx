import React from 'react';
import IconLogo from "../components/icons/IconLogo";
import config from "../config";

type ErrorPropsType = {
    message: string
}

const Error = (props: ErrorPropsType) => {
    return (
        <div className="content">
            <div className="header">
                <IconLogo/>
                <div className="logout"><a href={`${config.kratos.public}/self-service/browser/flows/logout`}>LOG OUT</a></div>
            </div>
            <div className="container">
                <h1>An error occurred</h1>
                <pre><code>{props.message}</code></pre>
            </div>
        </div>
    );
};

export default Error;
