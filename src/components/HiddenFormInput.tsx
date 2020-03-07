import React from 'react';

const HiddenFormInput = () => {
    return (
        <input name="{{name}}" type="hidden" value="{{value}}" />
    );
};

export default HiddenFormInput;
