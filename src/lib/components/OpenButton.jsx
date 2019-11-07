import React from 'react';

const OpenButton = ({ handleClick, count }) => {
    return (
        <div
            className='rw-clickable rw-centered rw-open-button'
            onClick={() => handleClick()}
        >
            <div>
                {count}
            </div>
        </div>
    );
};

export default OpenButton;
