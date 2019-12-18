import React from 'react';
import styles from '../styles/MarkAsReadButton.module.css';

const MarkAsReadButton = ({ handleClick, read }) => {
    const style = {
        background: read ? '' : '#35A9CF',
    }
    return (
        <div className={styles.button} style={style} onClick={handleClick} />
    );
};

export default MarkAsReadButton;
