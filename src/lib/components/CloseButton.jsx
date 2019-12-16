import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    );
};

export default CloseButton;
