import Parser from 'rss-parser';
const parser = new Parser({
    customFields: {
        item: ['category', 'summary'],
    }
});

const readRssData = async (source, type, categories, isConfluence) => {
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
    if (isConfluence) {
        return feed.items.map((item) => {
            const summaryDiv = item.summary.split('<div class="confluence-information-macro-body">')[1];
            const summary = summaryDiv ? summaryDiv.split('<p>')[1].replace(/<.+>/gs, '') : null;
            return (
                {
                    ...item,
                    summary,
                }
            )
        });
    }
    return categories
        ? feed.items
            .filter(item => categories.includes(item.category && item.category.$
                ? item.category.$[Object.keys(item.category.$)[0]]
                : item.category))
        : feed.items;
};

export default readRssData;
