import React from 'react';
import WidgetHeader from './WidgetHeader';
import styles from '../styles/WidgetContainer.module.css';

const WidgetContainer = ({ rssItems, position, show, setShow }) => {
    const validPosition = ['left', 'right'].includes(position);
    const pos = (position) => {
        const style = {};
        style[position] = show ? '0' : '-450px';
        return style;
    };
    return (
        <div
            id="rw-widget-container"
            className={styles.container}
            style={{
                ...pos(position),
                transition: `${validPosition ? position : 'unset'} 300ms`,
            }}
        >
            <WidgetHeader setShow={setShow} />
            <div
                className={styles.body}
                id="rw-widget-body"
            >
                {rssItems}
            </div>
        </div>
    );
};

export default WidgetContainer;
