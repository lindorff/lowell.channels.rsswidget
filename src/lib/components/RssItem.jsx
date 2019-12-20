import React from 'react';
import MarkAsReadButton from './MarkAsReadButton';
import styles from '../styles/RssItem.module.css';
import { jcSbRow } from '../styles/styles.module.css';

const RssItem = ({ read, title, content, link, markItemAsRead }) => {
    return (
        <div className={styles.item}>
            <div className={jcSbRow}>
                <div className={styles.title}>
                    {title}
                </div>
                <MarkAsReadButton
                    handleClick={() => markItemAsRead(link)}
                    read={read}
                />
            </div>
            {!read && (
            <>
                <div className={styles.content}>
                    {content}
                </div>
                <div className={styles.link}>
                    {!!link && <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                        onClick={() => markItemAsRead(link)}
                    >
                        {'Read more'}
                    </a>}
                </div>
            </>)}
        </div>
    );
};


export default RssItem;
