import { compose, mapProps, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import newsActions from '../../../actions/news';

import Commentary from './Commentary';

const mapDispatchToProps = dispatch => ({
    saveCommentary: commentary => {
        dispatch(newsActions.newsCommentaryAdd(commentary));
    },
});

const withCommentary = compose(
    connect(
        () => ({}),
        mapDispatchToProps
    ),
    withState('text', 'updateText', ''),
    withHandlers({
        handleCommentaryChange: ({ updateText }) => ({ target: { value } }) => {
            updateText(value);
        },
        saveCommentaryHandler: ({ comments, saveCommentary, text, newsId }) => () => {
            saveCommentary({ id: newsId, commentary: { text, id: comments.length } });
        },
    }),
    mapProps(({ text, handleCommentaryChange, saveCommentaryHandler }) => ({
        text,
        handleCommentaryChange,
        saveCommentaryHandler,
    }))
);

export default withCommentary(Commentary);
