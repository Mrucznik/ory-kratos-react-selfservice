import React from 'react';
import IconLogo from "./icons/IconLogo";
import IconGear from "./icons/IconGear";
import IconSignOut from "./icons/IconSignOut";
import IconRepoForked from "./icons/IconRepoForked";

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <IconLogo/>
            </a>
            <div className="icon-actions">
                <div className="settings">
                    <a href="/profile">
                        <IconGear/>
                    </a>
                </div>
                <div className="logout">
                    <a href="{{logoutUrl}}">
                        <IconSignOut/>
                    </a>
                </div>
                <div className="fork">
                    <a href="https://github.com/ory/kratos-selfservice-ui-node" target="_blank">
                        <IconRepoForked/>
                        <div>Fork on<br/>GitHub</div>
                    </a>
                </div>
            </div>
        </div>

);
};

export default Header;
