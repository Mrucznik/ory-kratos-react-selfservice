import React from 'react';

type FormErrorsPropsType = {
    className: string
}

const FormErrors = (params: FormErrorsPropsType) => {
    return (
        <div className={`form-errors ${params.className}`}>
            {/*{{~#each errors~}}*/}
            {/*<div className="message">{{message}}</div>*/}
            {/*{{~/each~}}*/}
        </div>
    );
};

export default FormErrors;
