import React from 'react';
import IconLogo from "./icons/IconLogo";
import IconGear from "./icons/IconGear";
import IconSignOut from "./icons/IconSignOut";
import IconRepoForked from "./icons/IconRepoForked";
import {Link} from "react-router-dom";
import config from '../config'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <IconLogo/>
            </Link>
            <div className="icon-actions">
                <div className="settings">
                    <Link to="/profile">
                        <IconGear/>
                    </Link>
                </div>
                <div className="logout">
                    <Link to={`${config.kratos.browser}/self-service/browser/flows/logout`}>
                        <IconSignOut/>
                    </Link>
                </div>
                <div className="fork">
                    <a href="https://github.com/ory/kratos-selfservice-ui-node" target="_blank" rel="noopener noreferrer">
                        <IconRepoForked/>
                        <div>Fork on<br/>GitHub</div>
                    </a>
                </div>
            </div>
        </div>

);
};

export default Header;
