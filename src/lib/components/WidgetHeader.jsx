import React from 'react';
import CloseButton from './CloseButton';
import styles from '../styles/WidgetHeader.module.css';

const WidgetHeader = ({ setShow }) => {
    return (
        <div
            id="rw-widget-header"
            className={styles.header}
        >
            {/* <div
                style={{
                    alignSelf: 'flex-end',
                    padding: '0 10px 5px 0',
                    fontSize: '14px',
                    ...bold,
                    ...clickable,
                }}
                onClick={() => markAllAsRead(feed.filter(item => !readItems.includes(item.link)))}
            >
                {'Mark all as read'}
            </div> */}
            <div className={styles.text}>
                {'Announcements'}
            </div>
            <CloseButton
                handleClick={() => setShow(false)}
            />
        </div>
    );
};

export default WidgetHeader;
