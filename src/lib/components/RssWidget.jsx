import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use'; 
import WidgetContainer from './WidgetContainer';
import RssItem from './RssItem';
import OpenButton from './OpenButton';
import readData from '../utils/dataReader';

const RssWidget = ({ feedSource, feedType, position, categories, themeColor, isConfluence }) => {
    const [show, setShow] = useState(false);
    const [feed, setFeed] = useState([]);
    const [readItems, setReadItems] = useLocalStorage('rw-readItems', []);

    useEffect(() => {
        readData(feedSource, feedType, categories, isConfluence).then(res => setFeed(res));
    }, [feedSource, feedType, categories]);

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
        items.forEach((item) => {
            if (!items.includes(item.link)) {
                readItemsNew.push(item.link);
            }
        });
        setReadItems(readItemsNew);
    };

    const rssItems = feed !== undefined && feed.map(item => (
        <RssItem
            read={readItems.includes(item.link)}
            title={item.title}
            content={isConfluence ? item.summary : item.contentSnippet}
            itemId={item.link}
            link={feedType === 'jsonApi' ? '' : item.link}
            markItemAsRead={markItemAsRead}
            key={item.link}
            color={themeColor}
        />
    ));
    
    return (
        <div id="rw-rss-widget">
            <OpenButton
                handleClick={() => setShow(true)}
                count={feed ? feed.filter(item => !readItems.includes(item.link)).length : 0}
                color={themeColor}
            />
            <WidgetContainer rssItems={rssItems} position={position} show={show} setShow={setShow} />
        </div>
    );
};

export default RssWidget;
