import React from 'react';
import styles from '../styles/MarkAsReadButton.module.css';

const MarkAsReadButton = ({ handleClick, read }) => {
    const classNames = [
        'rw-mark-as-read',
        styles.button,
    ];

    if (read) {
        classNames.push('rw-mark-as-read-read');
    } else {
        classNames.push(styles.unread, 'rw-mark-as-read-unread');
    }

    return (
        <div className={classNames.join(' ')} onClick={handleClick} />
    );
};

export default MarkAsReadButton;
