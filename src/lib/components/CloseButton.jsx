import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/CloseButton.module.css';

const CloseButton = ({ handleClick, color }) => {
    return (
        <div
            id="rw-widget-close-button"
            className={styles.button}
            onClick={() => handleClick()}
        >
            <FontAwesomeIcon icon={faTimes} />
        </div>
    );
};

export default CloseButton;
