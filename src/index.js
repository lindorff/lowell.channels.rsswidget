import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rssUrl = 'https://confluence.intad1.com/createrssfeed.action?types=page&spaces=AUA&title=Confluence+RSS+Feed&labelString%3D&excludedSpaceKeys%3D&sort=modified&maxResults=10&timeSpan=500&showContent=true';
// const apiUrl = `http://localhost:6060/rss?url=${rssUrl}`;
// const url = 'https://confluence.intad1.com/createrssfeed.action?types=page&spaces=AUA&title=Confluence+RSS+Feed&labelString%3D&excludedSpaceKeys%3D&sort=modified&maxResults=10&timeSpan=500&showContent=true';
// const url = 'http://www.reddit.com/.rss';
const url = 'C:/Users/blomqti/source/repos/lowell.channels.rsswidget/rss.rss';
ReactDOM.render(<App url={url} position='left' />, document.getElementById('root'));
