import React from 'react';
import { RssWidget } from './lib';

import source from './rss';

const App = () => {
    return (
        <RssWidget
            feedSource='https://jsonplaceholder.typicode.com/posts'
            // feedSource={source}
            feedType='jsonApi'
            // feedType='string'
            position='right'
        />
    )
}

export default App;
