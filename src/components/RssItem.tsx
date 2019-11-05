import * as React from 'react';

interface RssItem { read: boolean; title: string; content: string; link: string; id: string; markItemAsRead: Function };
const RssItem = ({ read, title, content, link, id, markItemAsRead }: RssItem) => {
    const containerStyle = {
        background: read ? '#ddd' : '#fff',
        color: '#000',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        margin: '8px',
    };
    return (
        <div style={containerStyle} onClick={() => markItemAsRead(id)}>
            <div className="rw-title">{title}</div>
            {!read && (
                <div className="rw-content">
                    {content}
                    {!!link && <a target="_blank" rel="noopener noreferrer" href={link}>Read more</a>}
                </div>)}
        </div>
    );
};


export default RssItem;
