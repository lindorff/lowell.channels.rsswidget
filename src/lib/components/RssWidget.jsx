import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use'; 
import RssItem from './RssItem';
import CloseButton from './CloseButton';
import OpenButton from './OpenButton';
import readRssData from '../utils/RssReader';
import { jcSbRow, clickable, bold } from '../styles';

const RssWidget = ({ rssFeedSource, rssFeedType, position, categories = [] }) => {
    const [show, setShow] = useState(false);
    const [feed, setFeed] = useState([]);
    const [readItems, setReadItems] = useLocalStorage('rw-readItems', []);

    useEffect(() => {
        readRssData(rssFeedSource, rssFeedType, categories).then(res => setFeed(res));
    }, [rssFeedSource, rssFeedType, categories]);

    const markItemAsRead = (id) => {
        const readItemsNew = [...readItems];
        if (!readItemsNew.includes(id)) {
            readItemsNew.push(id);
            setReadItems(readItemsNew);
        } else {
            setReadItems(readItemsNew.filter(item => item !== id));
        }
    };

    const markAllAsRead = (items) => {
        const readItemsNew = [...readItems];
        if (items.length > 1) {
            items.forEach((item) => {
                if (!items.includes(item.link)) {
                    readItemsNew.push(item.link);
                }
            });
            setReadItems(readItemsNew);
        }
    };

    const rssItems = feed !== undefined && feed.map(item => (
        <RssItem
            read={readItems.includes(item.link)}
            title={item.title}
            content={item.contentSnippet}
            link={item.link}
            markItemAsRead={markItemAsRead}
            key={item.link}
        />
    ));

    const validPosition = ['left', 'right'].includes(position);
    const pos = (position) => {
        const style = {};
        style[position] = show ? '10px' : '-400px';
        return style;
    };
    return (
        <div id="rw-rss-widget">
            <OpenButton
                handleClick={() => setShow(true)}
                count={feed ? feed.filter(item => !readItems.includes(item.link)).length : 0}
            />
            <div
                style={{
                    width: '350px',
                    padding: '2px',
                    border: 'solid 1px #ccc',
                    borderRadius: '5px',
                    background: '#eee',
                    boxShadow: '5px 5px 10px #777',
                    position: 'fixed',
                    top: '10px',
                    zIndex: '99',
                    ...pos(position),
                    transition: `${validPosition ? position : 'unset'} 300ms`,
                }}
            >
                <div style={jcSbRow}>
                    <CloseButton
                        handleClick={() => setShow(false)}
                    />
                    <div
                        style={{
                            alignSelf: 'flex-end',
                            padding: '0 10px 5px 0',
                            ...bold,
                            ...clickable,
                        }}
                        onClick={() => markAllAsRead(feed.filter(item => !readItems.includes(item.link)))}
                    >
                        {'Mark all as read'}
                    </div>
                </div>
                <div
                    style={{
                        position: 'relative',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                    }}
                >
                    {rssItems}
                </div>
            </div>
        </div>
    );
};

export default RssWidget;
