import Link from 'next/link';
import {getImgUrlByIdWithParams} from '../../helpers/index';

const NewsCard = ({ news }) => 
    <div className="news_block">
        <div className="news_header">
            <img className="news-image" src={getImgUrlByIdWithParams(news.photo, {width: 900, height: 600})} alt={news.title} />
        </div>
        <div className="news_content">
            <div className="news-date">{news.date}</div>
            <Link prefetch href={`/news/detail?id=${news.id}`}>
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