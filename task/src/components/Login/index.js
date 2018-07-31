import { compose, withState, withHandlers, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Database from '../../services/Database';
import LocalStorage from '../../services/LocalStorage';
import Login from './Login';
import userActions from '../../actions/user';

import endpoints from '../../services/Endpoints';

const mapDispatchToProps = dispatch => ({
    saveUser: user => {
        dispatch(userActions.userSave(user));
    },
});

const withLogin = compose(
    connect(
        () => ({}),
        mapDispatchToProps
    ),
    withState('user', 'updateUser', { username: '', password: '' }),
    withState('isValid', 'validate', { status: true, message: '' }),
    withHandlers({
        handleChangeUser: ({ updateUser, user }) => ({ target: { name, value } }) => {
            const updatedUser = { ...user, [name]: value };
            updateUser(updatedUser);
        },
        signIn: ({ validate, user, saveUser, history }) => () => {
            const res = Database.findUser(user);
            validate(res);
            if (res.status) {
                saveUser(res.user);
                LocalStorage.setItem('user', res.user);
                history.push(endpoints.dashboard);
            }
        },
    }),
    mapProps(({ handleChangeUser, signIn, user: { username, password }, isValid }) => ({
        handleChangeUser,
        signIn,
        username,
        password,
        isValid,
    }))
)(Login);

export default withRouter(withLogin);
