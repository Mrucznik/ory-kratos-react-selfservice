import React from 'react';
import {FormField} from "@oryd/kratos-client";
import KratosForm from "./KratosForm";

type FormFieldsProps = {
    formFields: FormField[]
}

const FormFields = (props: FormFieldsProps) => {
    return (
        <div>
            {
                props.formFields.map((item) => <KratosForm key={item.name} field={item}/>)
            }
        </div>
    );
};

export default FormFields;
