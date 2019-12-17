import React from 'react';
import { RssWidget } from './lib';

import source from './rss';

const App = () => {
    return (
        <RssWidget
            rssFeedSource={source}
            rssFeedType='string'
            position='right'
            categories={['epic', 'nice']}
        />
    )
}

export default App;
