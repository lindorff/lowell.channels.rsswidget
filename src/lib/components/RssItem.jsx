import React from 'react';
import MarkAsReadButton from './MarkAsReadButton';
import { jcSbRow, bold } from '../styles';

const RssItem = ({ read, title, content, link, markItemAsRead }) => {
    const style = {
        background: read ? '#ddd' : '#fff',
        color: '#000',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        margin: '8px',
    };
    const titleReadStyle = read ? {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    } : {};
    return (
        <div style={style}>
            <div style={{ ...jcSbRow }}>
                <div
                    style={{
                        ...bold,
                        fontSize: '16px',
                        marginBottom: '5px',
                        maxWidth: '90%',
                        ...titleReadStyle,
                    }}
                >
                    {title}
                </div>
                <MarkAsReadButton
                    handleClick={() => markItemAsRead(link)}
                    read={read}
                />
            </div>
            {!read && (
                <div
                    style={{
                        fontSize: '14px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    <div>
                        {content}
                    </div>
                    <div>
                        {!!link && <a target="_blank" rel="noopener noreferrer" href={link}>{'Read more'}</a>}
                    </div>
                </div>)}
        </div>
    );
};


export default RssItem;
