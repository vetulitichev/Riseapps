import { connect } from 'react-redux';
import { compose, withState, withHandlers, mapProps } from 'recompose';

import newsActions from '../../../../actions/news';

import ItemEdit from './ItemEdit';

const mapDispatchToProps = dispatch => ({
    editItem: news => {
        dispatch(newsActions.newsEdit(news));
    },
});

const withEditItem = compose(
    connect(
        () => ({}),
        mapDispatchToProps
    ),
    withState('item', 'updateItem', ({ news }) => news),
    withHandlers({
        handleNewsChange: ({ updateItem, item }) => ({ target: { name, value } }) => {
            updateItem({ ...item, [name]: value });
        },
        finishEditHandler: ({ item, editItem, editHandler }) => () => {
            editHandler();
            editItem(item);
        },
    }),
    mapProps(({ item, handleNewsChange, removeNews, finishEditHandler }) => ({
        item,
        handleNewsChange,
        removeNews,
        finishEditHandler,
    }))
);

export default withEditItem(ItemEdit);
