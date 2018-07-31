import { createStore } from 'redux';

import reducer from '../reducers';

const store = (initialState = {}) => {
    const storeIn = createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
    );
    return storeIn;
};

export default store;
