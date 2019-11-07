import React from 'react';
import MarkAsReadButton from './MarkAsReadButton';

const RssItem = ({ read, title, content, link, id, markItemAsRead }) => {
    const containerStyle = {
        background: read ? '#ddd' : '#fff',
        color: '#000',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        margin: '8px',
    };
    return (
        <div style={containerStyle}>
            <div className="rw-jc-sb-row">
                <div className={`rw-title ${read && 'rw-title-read'}`}>{title}</div>
                <MarkAsReadButton
                    handleClick={() => markItemAsRead(id)}
                    read={read}
                />
            </div>
            {!read && (
                <div className="rw-content">
                    <div>
                        {content}
                    </div>
                    <div>
                        {!!link && <a target="_blank" rel="noopener noreferrer" href={link}>Read more</a>}
                    </div>
                </div>)}
        </div>
    );
};


export default RssItem;
