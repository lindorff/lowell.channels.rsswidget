import Parser from 'rss-parser';
import rss from '../rss';
const parser = new Parser();

const readRssData = async (url: string) => {
    // const feed = await parser.parseURL(url);
    const feed = await parser.parseString(rss);
    return feed.items;
};

export default readRssData;
