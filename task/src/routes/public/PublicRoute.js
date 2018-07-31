import React from 'react';
import { Route, Redirect } from 'react-router';

import localStorage from '../../services/LocalStorage';
import endpoints from '../../services/Endpoints';

const PublicRoute = props => {
    const { properties, exact, path, component:Component } = props;
    return (
        <Route
            exact={!exact || true}
            path={path}
            render={() =>
                localStorage.getItem('user') ? (
                    <Redirect to={endpoints.dashboard} />
                ) : (
                    <Component {...properties} />
                )
            }
        />
    );
};
export default PublicRoute;
