import userTypes from '../constants/actionTypes/user';

const userSave = user => ({
    type: userTypes.USER_SAVE,
    payload: user,
});

const userClear = () => ({
    type: userTypes.USER_CLEAR,
});

export default {
    userSave,
    userClear,
};
