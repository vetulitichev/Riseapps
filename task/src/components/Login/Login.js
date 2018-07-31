import React from 'react';
import { string, func, bool, shape } from 'prop-types';

// CSS
import './index.css';

// Components
import ErrorDialod from './ErrorDialod';

const Login = ({ handleChangeUser, signIn, username, password, isValid }) => (
    <div>
        <input
            className={isValid.status ? '' : 'input-error'}
            onChange={handleChangeUser}
            value={username}
            name="username"
        />
        <input
            className={isValid.status ? '' : 'input-error'}
            onChange={handleChangeUser}
            valus={password}
            name="password"
            type="password"
        />
        <button type="submit" onClick={signIn}>
            Sign In
        </button>
        <br />
        {isValid.status ? null : <ErrorDialod message={isValid.message} />}
    </div>
);

Login.propTypes = {
    handleChangeUser: func.isRequired,
    signIn: func.isRequired,
    username: string.isRequired,
    password: string.isRequired,
    isValid: shape({
        status: bool,
        message: string,
    }),
};

Login.defaultProps = {
    isValid: { status: false, message: '' },
};
export default Login;
