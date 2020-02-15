import React from 'react';

const Register = () => {
    return (
        <div>
            <form action="" method="POST">
                <input type="email" name="email" placeholder="Enter your E-Mail Address" />
                <input type="password" name="password" placeholder="Enter your password" />
                <input
                    type="first_name"
                    name="password"
                    placeholder="Enter your First Name"
                />
                <input type="last_name" name="password" placeholder="Enter your Last Name" />
                <input type="hidden" name="csrf_token" value="cdef..." />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;
