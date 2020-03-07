import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            {{ > header}}
            <div className="container">
                <h4>User settings</h4>

                {{ > formErrors className="overview-form-errors"}}

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
