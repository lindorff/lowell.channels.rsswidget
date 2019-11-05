import * as React from 'react';

interface ToggleButton { handleClick: Function; show: boolean; count: number }
const ToggleButton = ({ handleClick, show, count }: ToggleButton) => {
    return (
        <div
            // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            className={`rw-clickable rw-centered rw-${show ? 'close-button' : 'open-button'}`}
            onClick={() => handleClick()}
        >
            <div>
                {show ? 'x' : count}
            </div>
        </div>
    );
};

export default ToggleButton;
