import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use'; 
import RssItem from './RssItem';
import CloseButton from './CloseButton';
import OpenButton from './OpenButton';
import readRssData from '../utils/RssReader';
import '../css/app.css';

const RssWidget = ({ rssFeedSource, rssFeedType, position }) => {
    const [show, setShow] = useState(false);
    const [feed, setFeed] = useState([]);
    const [readItems, setReadItems] = useLocalStorage('rw-readItems', []);

    useEffect(() => {
        readRssData(rssFeedSource, rssFeedType).then(res => setFeed(res));
    }, [rssFeedSource, rssFeedType]);

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

    return (
        <div id="rw-rss-widget">
            {show && (
                <div className={`rw-widget rw-slide-animation-${validPosition ? position : 'left'} rw-${validPosition ? position : 'left'}`}>
                    <div className="rw-jc-sb-row">
                        <CloseButton
                            handleClick={() => setShow(false)}
                        />
                        <div
                            style={{ alignSelf: 'flex-end', padding: '0 10px 5px 0' }}
                            className="rw-clickable"
                            onClick={() => markAllAsRead(feed.filter(item => !readItems.includes(item.link)))}
                        >
                            {'Mark all as read'}
                        </div>
                    </div>
                    <div className="rw-rss-item-list">
                        {rssItems}
                    </div>
                </div>
            )}
            <OpenButton
                handleClick={() => setShow(true)}
                count={feed ? feed.filter(item => !readItems.includes(item.link)).length : 0}
            />
        </div>
    );
};

export default RssWidget;
