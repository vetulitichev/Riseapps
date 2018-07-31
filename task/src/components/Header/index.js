import { compose, withHandlers, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import localStorage from '../../services/LocalStorage';
import Endpoints from '../../services/Endpoints';
import userActions from '../../actions/user';

import Header from './Header';

const mapDistaptchToProps = dispatch => ({
    clearUser: () => {
        dispatch(userActions.userClear());
    },
});

const withHeader = compose(
    connect(
        () => ({}),
        mapDistaptchToProps
    ),
    withHandlers({
        logOut: ({ clearUser, history }) => () => {
            localStorage.clearStorage();
            clearUser();
            history.push(Endpoints.login);
        },
    }),
    mapProps(({ logOut }) => ({
        logOut,
    }))
);

export default withRouter(withHeader(Header));
