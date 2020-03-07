import React from 'react';

const Verify = () => {
    return (
        <div className="content">
            {{ > header}}
            <div className="container">
                <h4>Resend verification code</h4>

                {{ > formErrors className="overview-form-errors"}}

                <form action="{{action}}" method="{{method}}">
                    {/*{{#each fields}}*/}
                    {/*{{ > (toFormInputPartialName type)}}*/}
                    {/*{{/each}}*/}
                    <button type="submit">Resend verification code</button>
                </form>
            </div>
        </div>
    );
};

export default Verify;
