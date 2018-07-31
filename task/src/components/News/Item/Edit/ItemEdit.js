import React from 'react';
import { string, func, shape } from 'prop-types';
import WithList from '../../Commentary/withList';

const NewsItem = ({
    item: { title, text, date, user, id, comments },
    removeNews,
    handleNewsChange,
    finishEditHandler,
}) => (
    <div>
        <input onChange={handleNewsChange} name="title" value={title} />
        <input onChange={handleNewsChange} name="text" value={text} />
        <input onChange={handleNewsChange} name="date" value={date} />
        <input onChange={handleNewsChange} name="user" value={user} />
        <button onClick={finishEditHandler} type="button">
            Finish
        </button>
        <button
            onClick={() => {
                removeNews(id);
            }}
            type="button"
        >
            Delete
        </button>
        <br />
        <WithList comments={comments} newsId={id} />
    </div>
);

NewsItem.propTypes = {
    item: shape({
        title: string.isRequired,
        text: string.isRequired,
        date: string.isRequired,
        user: string.isRequired,
        id: string.isRequired,
    }).isRequired,
    removeNews: func.isRequired,
    handleNewsChange: func.isRequired,
    finishEditHandler: func.isRequired,
};

export default NewsItem;
