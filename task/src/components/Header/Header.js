import React from 'react';
import { NavLink } from 'react-router-dom';

import { func } from 'prop-types';
import endpoints from '../../services/Endpoints';

// CSS
import './index.css';

const Header = ({ logOut }) => (
    <header>
        <NavLink to={endpoints.dashboard + endpoints.news} activeClassName="selected">
            News
        </NavLink>
        <NavLink to={endpoints.dashboard + endpoints.weather} activeClassName="selected">
            Weather
        </NavLink>
        <button type="button" onClick={logOut}>
            Logout
        </button>
    </header>
);

Header.propTypes = {
    logOut: func.isRequired,
};

export default Header;
