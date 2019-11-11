import React from 'react';
import { clickable, centered } from '../styles';

const OpenButton = ({ handleClick, count }) => {
    return (
        <div
            style={{
                ...clickable,
                ...centered,
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                background: '#4cc0ad',
                fontWeight: '900',
                color: '#fff',
                fontSize: 'larger',
            }}
            onClick={() => handleClick()}
        >
            <div>
                {count}
            </div>
        </div>
    );
};

export default OpenButton;
