import Link from 'next/link';
import {getImgUrlByIdWithParams} from "../../helpers";

const ArticleList = ({articles, width}) => {
    return (
        <div>
            {articles.map(article =>
                <div className="cards" style={{width}} key={article.id}>
                    <Link  href={article.link}>
                        <a>
                            <div className="services_image"
                                 style={{backgroundImage: `url(${getImgUrlByIdWithParams(article.photo, {width: 780, height: 520})})`}}>
                            </div>
                        </a>
                    </Link>
                    <div className="text" style={{padding: '35px 40px'}}>
                        <Link  href={article.link}><a>
                            <p style={{fontSize: '20px'}}>
                                <span><strong>{article.title || ''}</strong></span>
                            </p>
                            <p>{article.text || ''}</p>

                        </a></Link>
                        <Link  href={article.link}><a>Подробнее
                            →</a></Link>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ArticleList;
