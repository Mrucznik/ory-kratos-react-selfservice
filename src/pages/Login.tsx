import React from 'react';

const Login = () => {
    return (
        <div>
            <form action="" method="POST">
                <input type="text" name="identifier" placeholder="Enter your username" />
                <input type="password" name="password" placeholder="Enter your password" />
                <input type="hidden" name="csrf_token" value="cdef..." />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Login;
