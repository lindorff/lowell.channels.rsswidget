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
    const [readItems, setReadItems] = useLocalStorage('readItems', []);

    useEffect(() => {
        readRssData(rssFeedSource, rssFeedType).then(res => setFeed(res));
    }, [rssFeedSource, rssFeedType]);

    const markItemAsRead = (id) => {
        const items = [...readItems];
        if (!items.includes(id)) {
            items.push(id);
            setReadItems(items);
        } else {
            setReadItems(items.filter(item => item !== id));
        }
    };

    const rssItems = feed !== undefined && feed.map(item => (
        <RssItem
            read={readItems.includes(item.link)}
            title={item.title}
            content={item.contentSnippet}
            link={item.link}
            markItemAsRead={markItemAsRead}
            id={item.link}
            key={item.link}
        />
    ));

    const validPosition = ['left', 'right'].includes(position);

    return (
        <div id="rss-widget">
            {show && (
                <div className={`rw-widget rw-slide-animation-${validPosition ? position : 'left'} rw-${validPosition ? position : 'left'}`}>
                    <CloseButton
                        show={show}
                        handleClick={() => setShow(false)}
                        count={feed ? feed.filter(item => !readItems.includes(item.id)).length : 0}
                    />
                    {rssItems}
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
