import React from 'react';

type FormErrorsProps = {
    className: string,
    errors: Error[] | undefined
}

const FormErrors = (props: FormErrorsProps) => {
    return (
        <div className={`form-errors ${props.className}`}>
            {
                props.errors && props.errors.map((item, key) =>
                    <div key={key} className="message">{item.message}</div>
                )
            }
        </div>
    );
};

export default FormErrors;
