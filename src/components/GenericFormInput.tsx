import React, {useState} from 'react';
import FormErrors from "./FormErrors";
import {getTitle} from "../util/translations";
import {FormField} from "@oryd/kratos-client";

const GenericFormInput = (props: { field: FormField }) => {
    const [value, setValue] = useState(props.field.value?.toString());

    const handleChange = (e: React.FormEvent) => {
        setValue((e.target as any).value)
    };

    return (
        <fieldset>
            <label>
                <input
                    name={props.field.name}
                    type={props.field.type}
                    value={value}
                    placeholder={getTitle(props.field.name)}
                    readOnly={props.field.disabled}
                    onChange={handleChange}
                />
                <span>{getTitle(props.field.name)}</span>
            </label>
            <FormErrors className="input-form-errors" errors={props.field.errors}/>
        </fieldset>
    );
};

export default GenericFormInput;
