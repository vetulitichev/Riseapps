import { compose, withState, withHandlers, mapProps } from 'recompose';

import List from './List';

const withList = compose(
    withState('isListShown', 'showList', false),
    withHandlers({
        showListHandler: ({ isListShown, showList }) => () => {
            showList(!isListShown);
        },
    }),
    mapProps(({ isListShown, showListHandler, comments, newsId }) => ({
        isListShown,
        showListHandler,
        comments,
        newsId,
    }))
);

export default withList(List);
