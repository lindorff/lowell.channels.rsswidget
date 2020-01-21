import React from 'react';
import styles from '../styles/OpenButton.module.css';

const OpenButton = ({ handleClick, count }) => {
    return (
        <div
            className={styles.notification}
            onClick={() => handleClick()}
        >
            <div className={styles.text}>
                {"What's new"}
            </div>
            <div
                className={styles.count}
                id="rw-open-button"
            >
                {count}
            </div>
        </div>
    );
};

export default OpenButton;
