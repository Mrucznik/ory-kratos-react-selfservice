import React from 'react';
import FormErrors from "./FormErrors";
import {getTitle} from "../util/translations";
import {FormField} from "@oryd/kratos-client";

const GenericFormInput = (props: {field: FormField}) => {
    return (
        <fieldset>
            <label>
                <input name={props.field.name} type={props.field.type} value={props.field.value?.toString()} placeholder={getTitle(props.field.name)} readOnly/>
                <span>{getTitle(props.field.name)}</span>
            </label>
            <FormErrors className="input-form-errors" errors={[]}/>
        </fieldset>
    );
};

export default GenericFormInput;
