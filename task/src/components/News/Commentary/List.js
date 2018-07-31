import React from 'react';
import v4 from 'uuid/v4';
import { array, func, bool, string } from 'prop-types';

import WithCommentary from './withCommentary';

const CommentaryList = ({ comments, isListShown, showListHandler, newsId }) => (
    <div>
        <button onClick={showListHandler} type="button">
            {isListShown ? 'Hide Commentary' : 'Show Commentary'}
        </button>
        <ul>
            {isListShown ? (
                <div>
                    {comments.map(({ text }) => <li key={v4()}>{text}</li>)}
                    <WithCommentary comments={comments} newsId={newsId} />
                </div>
            ) : null}
        </ul>
    </div>
);

CommentaryList.propTypes = {
    comments: array.isRequired,
    isListShown: bool.isRequired,
    showListHandler: func.isRequired,
    newsId: string.isRequired,
};

export default CommentaryList;
