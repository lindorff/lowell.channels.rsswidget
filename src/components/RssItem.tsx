import * as React from 'react';

interface RssItem { title: string; content: string; }
const RssItem = ({ title, content }: RssItem) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default RssItem;
