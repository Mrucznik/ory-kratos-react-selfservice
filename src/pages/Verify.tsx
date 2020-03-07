import React from 'react';
import Header from "../components/Header";
import FormErrors from "../components/FormErrors";

const Verify = () => {
    return (
        <div className="content">
            <Header/>
            <div className="container">
                <h4>Resend verification code</h4>

                <FormErrors className="overview-form-errors"/>

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
