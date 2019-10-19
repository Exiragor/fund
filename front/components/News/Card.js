import Link from 'next/link';

const NewsCard = ({ news }) => 
    <div className="news_block">
        <div className="news_header">
            <img className="news-image" src={news.img} alt={news.title} />
        </div>
        <div className="news_content">
            <div className="news-date">{news.date}</div>
            <Link prefetch href={news.link}>
                <a>
                    <h3 className="news-title entry-title">{news.title}</h3>
                </a>
            </Link>
            <div className="entry-content">
                <p>{news.description}...</p>
            </div> 
        </div>
    </div>;

export default NewsCard;