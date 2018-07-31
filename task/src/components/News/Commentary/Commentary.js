import React from 'react';
import { func, string } from 'prop-types';

const Commentary = ({ handleCommentaryChange, saveCommentaryHandler, text }) => (
    <div>
        <input onChange={handleCommentaryChange} value={text} />
        <button onClick={saveCommentaryHandler} type="button">
            Save
        </button>
    </div>
);

Commentary.propTypes = {
    handleCommentaryChange: func.isRequired,
    saveCommentaryHandler: func.isRequired,
    text: string.isRequired,
};

export default Commentary;
