import Parser from 'rss-parser';
const parser = new Parser();

const readRssData = async (source, type) => {
    let feed;
    switch (type) {
        case 'url':
            feed = await parser.parseURL(source);
            break;
        case 'string':
            feed = await parser.parseString(source);
            break;
        default:
            throw new Error('Invalid type. Allowed types include: "url" and "string"');
    }
    return feed.items;
};

export default readRssData;
