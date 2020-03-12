import React from 'react';

const RedirectUrl = (props: {to: string}) => {
    window.location.href = props.to;
    return (<section>Redirecting...</section>);
};

export default RedirectUrl;
