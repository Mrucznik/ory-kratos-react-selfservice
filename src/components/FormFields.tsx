import React from 'react';
import {toFormInputPartialName} from "../util/translations";
import {FormField} from "@oryd/kratos-client";

type FormFieldsProps = {
    formFields: FormField[]
}

const FormFields = (props: FormFieldsProps) => {
    return (
        <div>
            {
                props.formFields.map((item) => toFormInputPartialName(item))
            }
        </div>
    );
};

export default FormFields;
