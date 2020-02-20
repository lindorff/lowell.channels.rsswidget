import React from 'react';
import MarkAsReadButton from './MarkAsReadButton';
import styles from '../styles/RssItem.module.css';
import { jcSbRow } from '../styles/styles.module.css';

const RssItem = ({ read, title, content, link, markItemAsRead }) => {
    const itemClassNames = [
        'rw-item',
        styles.item,
    ];

    const titleClassNames = [
        'rw-item-title',
        styles.title,
    ];

    const contentClassNames = [
        'rw-item-content',
        styles.content,
    ];

    const linkClassNames = [
        'rw-item-link',
        styles.link,
    ];

    return (
        <div className={itemClassNames.join(' ')}>
            <div className={jcSbRow}>
                <div className={titleClassNames.join(' ')}>
                    {title}
                </div>
                <MarkAsReadButton
                    handleClick={() => markItemAsRead(link)}
                    read={read}
                />
            </div>
            {!read && (
            <>
                <div className={contentClassNames.join(' ')}>
                    <span dangerouslySetInnerHTML={{__html: content}}></span>
                </div>
                <div className={linkClassNames.join(' ')}>
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
