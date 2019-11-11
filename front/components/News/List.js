import NewsCard from './Card';

const NewsList = ({ news }) => <div>{ news && news.map(newsItem => <NewsCard key={newsItem.id} news={newsItem} />) }</div>

export default NewsList;