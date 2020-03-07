import React from 'react';

type FormErrorsProps = {
    className: string,
    errors: ErrorType[]
}

type ErrorType = {
    message: string
}

const FormErrors = (props: FormErrorsProps) => {
    return (
        <div className={`form-errors ${props.className}`}>
            {
                props.errors.map((item) =>
                    <div className="message">{item.message}</div>
                )
            }
        </div>
    );
};

export default FormErrors;
