import newsTypes from '../constants/actionTypes/news';

const initialState = [];

const user = (state = initialState, { type, payload }) => {
    const news = state;
    switch (type) {
        case newsTypes.NEWS_ADD:
            const today = new Date();
            return [
                ...state,
                {
                    id: payload.id,
                    title: 'title',
                    text: 'text',
                    date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
                    user: payload.user,
                    comments: [],
                },
            ];

        case newsTypes.NEWS_REMOVE:
            return news.filter(item => item.id !== payload.id);

        case newsTypes.NEWS_EDIT:
            return news.map(item => {
                if (item.id === payload.id) {
                    Object.keys(payload).forEach(key => {
                        item[key] = payload[key];
                    });
                }
                return item;
            });

        case newsTypes.NEWS_COMMENTARY_ADD:
            return news.map(item => {
                if (item.id === payload.id) {
                    item.comments.push(payload.commentary);
                }
                return item;
            });

        case newsTypes.NEWS_COMMENTARY_REMOVE:
            return news.map(item => {
                if (item.id === payload.id) {
                    item.comments.filter(commentary => commentary.id !== payload.id);
                }
                return item;
            });

        default:
            return state;
    }
};

export default user;
