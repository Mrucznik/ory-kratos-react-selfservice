import React from 'react';
import IconLogo from "../components/icons/IconLogo";
import {Link} from "react-router-dom";

type ErrorPropsType = {
    message: string
}

const Error = (props: ErrorPropsType) => {
    return (
        <div className="content">
            <div className="header">
                <IconLogo/>
                <div className="logout"><Link to="/logout">LOG OUT</Link></div>
            </div>
            <div className="container">
                <h1>An error occurred</h1>
                <pre><code>{props.message}</code></pre>
            </div>
        </div>
    );
};

export default Error;
