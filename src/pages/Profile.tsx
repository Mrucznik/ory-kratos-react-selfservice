import React from 'react';
import Header from "../components/Header";
import FormErrors from "../components/FormErrors";

const Profile = () => {
    return (
        <div className="content">
            <Header/>
            <div className="container">
                <h4>User settings</h4>

                <FormErrors className="overview-form-errors"/>

                <form action="{{action}}" method="{{method}}">
                    {/*{{#each fields}}*/}
                    {/*{{ > (toFormInputPartialName type)}}*/}
                    {/*{{/each}}*/}
                    <button type="submit">Update user information</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
