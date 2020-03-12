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
            return <HiddenFormInput field={props.field}/>;
        case 'password':
            return <PasswordFormInput field={props.field}/>;
        default:
            return <GenericFormInput field={props.field}/>;
    }
};

export default KratosForm;
