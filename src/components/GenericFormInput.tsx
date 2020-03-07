import React from 'react';
import FormErrors from "./FormErrors";

const GenericFormInput = () => {
    return (
        <fieldset>
            <label>
                <input name="{{name}}" type="{{type}}" value="{{value}}" placeholder="{{getTitle name}}"/>
                    {/*<span>{{getTitle name}}</span>*/}
            </label>
            <FormErrors className="input-form-errors"/>
        </fieldset>
    );
};

export default GenericFormInput;
