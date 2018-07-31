import React from 'react';
import { string } from 'prop-types';
// CSS
import './index.css';

const ErrorDialod = ({ message }) => (
    <div className="dialod-error-message">
        <p>{message}</p>
    </div>
);

ErrorDialod.propTypes = {
    message: string.isRequired,
};

export default ErrorDialod;
