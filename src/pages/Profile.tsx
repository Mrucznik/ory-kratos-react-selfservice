import React from 'react';
import Header from "../components/Header";
import FormErrors from "../components/FormErrors";
import {toFormInputPartialName} from "../util/translations";
import {FormField} from "@oryd/kratos-client";

type ProfileProps = {
    action: string,
    method: string,
    fields: FormField[]
}

const Profile = (props: ProfileProps) => {
    return (
        <div className="content">
            <Header/>
            <div className="container">
                <h4>User settings</h4>

                <FormErrors className="overview-form-errors" errors={[]}/>

                <form action={props.action} method={props.method}>
                    {
                        props.fields.map((item) => toFormInputPartialName(item))
                    }
                    <button type="submit">Update user information</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
