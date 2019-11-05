import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use'; 
import RssItem from './components/RssItem';
import ToggleButton from './components/ToggleButton';
import * as Parser from 'rss-parser';
import readRssData from './utils/RssReader';
import './css/app.css';

interface RssWidget { url: string; position: string; }
const App = ({ url, position }: RssWidget) => {
    const [show, setShow] = useState(false);
    const [feed, setFeed] = useState<Parser.Item[] | undefined>([]);
    const [readItems, setReadItems] = useLocalStorage<string[]>('readItems', []);

    useEffect(() => {
        readRssData(url).then(res => setFeed(res));
    }, [url]);

    const rssItems = feed !== undefined && feed.map(item => (
        <RssItem
            read={readItems.includes(item.id)}
            title={item.title || ""}
            content={item.contentSnippet || ""}
            link={item.link ||""}
            markItemAsRead={markItemAsRead}
            id={item.id || ""}
            key={item.id}
        />
    ));

    function markItemAsRead(id: string) {
        const items = [...readItems];
        if (!items.includes(id)) {
            items.push(id);
            setReadItems(items);
        } else {
            setReadItems(items.filter(item => item !== id));
        }
    };

    return (
        <div id="rss-widget">
            {show && (
                <div className={`rw-widget rw-slide-animation-${position} rw-${position}`}>
                    <ToggleButton
                        show={show}
                        handleClick={() => setShow(false)}
                        count={feed ? feed.filter(item => !readItems.includes(item.id)).length : 0}
                    />
                    {rssItems}
                </div>
            )}
            <ToggleButton
                show={false}
                handleClick={() => setShow(true)}
                count={feed ? feed.filter(item => !readItems.includes(item.id)).length : 0}
            />
        </div>
    );
};

export default App;
