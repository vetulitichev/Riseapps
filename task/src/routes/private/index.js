import React from 'react';
import { Switch } from 'react-router';

import endpoints from '../../services/Endpoints';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../../pages/dashboard';
import News from '../../pages/News';
import Weather from '../../pages/Weather';

const PrivateRoutes = () => (
    <div>
        <Switch>
            <PrivateRoute exact path={endpoints.dashboard} component={Dashboard} />
            <PrivateRoute path={endpoints.dashboard + endpoints.news} component={News} />
            <PrivateRoute path={endpoints.dashboard + endpoints.weather} component={Weather} />
        </Switch>
    </div>
);

export default PrivateRoutes;
