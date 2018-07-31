import newsTypes from '../constants/actionTypes/news';

const newsAdd = news => ({
    type: newsTypes.NEWS_ADD,
    payload: news,
});
const newsRemove = id => ({
    type: newsTypes.NEWS_REMOVE,
    payload: {
        id,
    },
});
const newsEdit = news => ({
    type: newsTypes.NEWS_EDIT,
    payload: {
        ...news,
    },
});
const newsCommentaryAdd = commentary => ({
    type: newsTypes.NEWS_COMMENTARY_ADD,
    payload: {
        ...commentary,
    },
});
const newsCommentaryRemove = commentary => ({
    type: newsTypes.NEWS_COMMENTARY_REMOVE,
    payload: {
        ...commentary,
    },
});

export default {
    newsAdd,
    newsRemove,
    newsEdit,
    newsCommentaryAdd,
    newsCommentaryRemove,
};
