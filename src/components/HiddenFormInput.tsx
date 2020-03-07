import React from 'react';
import {FormField} from "@oryd/kratos-client";

const HiddenFormInput = (props: {field: FormField}) => {
    return (
        <input name={props.field.name} type={props.field.type} value={props.field.value?.toString()} />
    );
};

export default HiddenFormInput;
