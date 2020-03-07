import React from 'react';

const GenericFormInput = () => {
    return (
        <fieldset>
            <label>
                <input name="{{name}}" type="{{type}}" value="{{value}}" placeholder="{{getTitle name}}">
                    <span>{{getTitle name}}</span>
            </label>
            {{> formErrors className="input-form-errors"}}
        </fieldset>
    );
};

export default GenericFormInput;
