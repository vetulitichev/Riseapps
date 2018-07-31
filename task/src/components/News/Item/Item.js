import React from 'react';
import { string, func, shape } from 'prop-types';
import WithList from '../Commentary/withList';

const NewsItem = ({ news: { title, text, date, user, id, comments }, removeNews, editHandler }) => (
    <div>
        <title>{title}</title>
        <p>{text}</p>
        <p>{date}</p>
        <p>{user}</p>
        <button onClick={editHandler} type="button">
            Edit
        </button>
        <button
            onClick={() => {
                removeNews(id);
            }}
            type="button"
        >
            Delete
        </button>
        <WithList comments={comments} newsId={id} />
        <br />
    </div>
);

NewsItem.propTypes = {
    news: shape({
        title: string.isRequired,
        text: string.isRequired,
        date: string.isRequired,
        user: string.isRequired,
        id: string.isRequired,
    }).isRequired,
    removeNews: func.isRequired,
    editHandler: func.isRequired,
};

export default NewsItem;
