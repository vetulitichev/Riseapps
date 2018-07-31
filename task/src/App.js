import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import configureStore from './store';
// Routes
import PrivateRoutes from './routes/private';
import PublicRoute from './routes/public/PublicRoute';

// Endpoints
import endpoints from './services/Endpoints';

// Components
import Login from './components/Login';

const store = configureStore();
const history = createBrowserHistory({});

const App = () => (
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <PublicRoute exact path={endpoints.login} component={Login} />
                    <PrivateRoutes />
                </Switch>
            </Router>
        </Provider>
    </div>
);

export default App;
