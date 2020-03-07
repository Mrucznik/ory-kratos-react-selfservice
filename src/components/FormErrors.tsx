import React from 'react';

const FormErrors = () => {
    return (
        <div className="form-errors {{className}}">
            {{~#each errors~}}
            <div className="message">{{message}}</div>
            {{~/each~}}
        </div>
    );
};

export default FormErrors;
