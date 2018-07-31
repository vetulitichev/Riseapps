import { compose, withHandlers, mapProps } from 'recompose';
import { connect } from 'react-redux';

import newsActions from '../../actions/news';

import List from './List';

const mapStateToProps = ({ user, news }) => ({
    user,
    news,
});
const mapDispatchToProps = dispatch => ({
    addNews: news => {
        dispatch(newsActions.newsAdd(news));
    },
    removeNews: id => {
        dispatch(newsActions.newsRemove(id));
    },
});

const withNewsList = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers({
        addNewsHandler: ({ addNews, user, news }) => () => {
            addNews({ id: `${news.length}`, user: user.username });
        },
        removeNewsHandler: ({ removeNews }) => id => {
            removeNews(id);
        },
    }),
    mapProps(({ addNewsHandler, removeNewsHandler, news }) => ({
        addNewsHandler,
        removeNewsHandler,
        news,
    }))
);

export default withNewsList(List);
