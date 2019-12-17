import Parser from 'rss-parser';
const parser = new Parser({
    customFields: {
        item: ['category']
    }
});

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
    return categories
        ? feed.items
            .filter(item => categories.includes(item.category && item.category.$
                ? item.category.$[Object.keys(item.category.$)[0]]
                : item.category))
        : feed.items;
};

export default readRssData;
