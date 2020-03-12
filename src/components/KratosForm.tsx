import React from 'react';
import HiddenFormInput from "./HiddenFormInput";
import PasswordFormInput from "./PasswordFormInput";
import GenericFormInput from "./GenericFormInput";
import {FormField} from "@oryd/kratos-client";

type KratosFormsParams = {
    field: FormField
}

const KratosForm = (props: KratosFormsParams) => {
    switch (props.field.name) {
        case 'hidden':
            return <HiddenFormInput key={props.field.name} field={props.field}/>;
        case 'password':
            return <PasswordFormInput key={props.field.name} field={props.field}/>;
        default:
            return <GenericFormInput key={props.field.name} field={props.field}/>;
    }
};

export default KratosForm;
