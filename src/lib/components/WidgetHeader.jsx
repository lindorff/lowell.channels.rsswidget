import React from 'react';
import CloseButton from './CloseButton';
import styles from '../styles/WidgetHeader.module.css';

const WidgetHeader = ({ setShow }) => {
    return (
        <div
            id="rw-header"
            className={styles.header}
        >
            <div
                id="rw-header-text"
                className={styles.text}
            >
                {'Announcements'}
            </div>
            <CloseButton
                handleClick={() => setShow(false)}
            />
        </div>
    );
};

export default WidgetHeader;
