import React from 'react';

const ToggleButton = ({ handleClick }) => {
    return (
        <div
            className='rw-clickable rw-centered rw-close-button'
            onClick={() => handleClick()}
        >
            <div>
                {'x'}
            </div>
        </div>
    );
};

export default ToggleButton;
