import Parser from 'rss-parser';
const parser = new Parser({
    customFields: {
        item: ['category', 'summary'],
    }
});

const readData = async (source, type, categories, isConfluence) => {
    let feed;
    switch (type) {
        case 'url':
            feed = await parser.parseURL(source);
            break;
        case 'string':
            feed = await parser.parseString(source);
            break;
        case 'jsonApi': {
            feed = await fetch(source).then(res => res.json());
            return feed.map(item => ({
                title: item.title,
                contentSnippet: item.body,
                link: item.id,
            }));
        }
        default:
            throw new Error('Invalid type. Allowed types include: "url", "string" and "jsonApi"');
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

export default readData;
