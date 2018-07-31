import userTypes from '../constants/actionTypes/user';
import LocalStorage from '../services/LocalStorage';

const initState = () => {
    const user = LocalStorage.getItem('user');

    return user || {};
};

const user = (state = initState(), { type, payload }) => {
    switch (type) {
        case userTypes.USER_SAVE:
            return {
                ...payload,
                ...state,
            };
        case userTypes.USER_CLEAR:
            return {};
        default:
            return state;
    }
};

export default user;
