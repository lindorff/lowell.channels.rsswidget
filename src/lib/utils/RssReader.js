import Parser from 'rss-parser';
const parser = new Parser();

const readRssData = async (source, type, categories) => {
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
    return categories.length > 0
        ? feed.items
            .filter(item => item.categories
                .every(category => categories.includes(category.$ ? category.$.term : category)))
        : feed.items;
};

export default readRssData;
