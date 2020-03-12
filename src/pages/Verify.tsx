import React from 'react';
import Header from "../components/Header";
import FormErrors from "../components/FormErrors";
import { FormField } from '@oryd/kratos-client'
import KratosForm from "../components/KratosForm";

type VerifyProps = {
    action: string,
    method: string,
    fields: FormField[]
}

const Verify = (props: VerifyProps) => {
    return (
        <div className="content">
            <Header/>
            <div className="container">
                <h4>Resend verification code</h4>

                <FormErrors className="overview-form-errors" errors={[]}/>

                <form action={props.action} method={props.method}>
                    {
                        props.fields.map((item) => <KratosForm field={item} />)
                    }
                    <button type="submit">Resend verification code</button>
                </form>
            </div>
        </div>
    );
};

export default Verify;
