import { combineReducers } from 'redux';

import user from './user';
import news from './news';

const rootReducers = {
    user,
    news,
};

const reducer = combineReducers(rootReducers);

export default reducer;
