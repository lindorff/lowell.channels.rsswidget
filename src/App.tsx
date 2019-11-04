import * as React from 'react';
import RssItem from './components/RssItem';

const App: React.FC = () => {
    return (
        <div id="rss-widget">
            <RssItem title="Title" content="Some content here" />
        </div>
    )
}

export default App;
