import React from 'react';
import { clickable, centered, bold } from '../styles';

const CloseButton = ({ handleClick }) => {
    return (
        <div
            style={{
                borderRadius: '5px',
                padding: '5px',
                background: '#ccc',
                width: '25px',
                height: '25px',
                marginBottom: '5px',
                ...bold,
                ...clickable,
                ...centered,
            }}
            onClick={() => handleClick()}
        >
            <div>
                {'x'}
            </div>
        </div>
    );
};

export default CloseButton;
