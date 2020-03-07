import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                {{ > icon_logo}}
            </a>
            <div className="icon-actions">
                <div className="settings">
                    <a href="/profile">
                        {{ > icon_gear}}
                    </a>
                </div>
                <div className="logout">
                    <a href="{{logoutUrl}}">
                        {{ > icon_sign_out}}
                    </a>
                </div>
                <div className="fork">
                    <a href="https://github.com/ory/kratos-selfservice-ui-node" target="_blank">
                        {{ > icon_repo_forked}}
                        <div>Fork on<br>GitHub</div>
                    </a>
                </div>
            </div>
        </div>

);
};

export default Header;
