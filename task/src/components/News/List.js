import React from 'react';
import v4 from 'uuid/v4';
import { array, func } from 'prop-types';

// Components
import Item from './Item/index';

const NewsList = ({ news, addNewsHandler, removeNewsHandler }) => (
    <div>
        {news.map(item => <Item key={v4()} news={item} removeNews={removeNewsHandler} />)}
        <button type="button" onClick={addNewsHandler}>
            Add
        </button>
    </div>
);

NewsList.propTypes = {
    news: array,
    addNewsHandler: func.isRequired,
    removeNewsHandler: func.isRequired,
};

NewsList.defaultProps = {
    news: [],
};

export default NewsList;
