import Link from 'next/link';

const ArticleList = ({articles, width}) => {
    return (
        <div>
            {articles.map(article =>
                <div className="cards" style={{width}} key={article.title}>
                    <Link  href={article.url}>
                        <a>
                            <div className="services_image"
                                 style={{backgroundImage: `url(${article.img})`}}>
                                {article.imgTitle &&
                                    <h2 className="services-title" style={{textAlign: 'left', padding: '0 20px'}}>
                                        {article.imgTitle}
                                    </h2>
                                }
                            </div>
                        </a>
                    </Link>
                    <div className="text" style={{padding: '35px 40px'}}>
                        <Link  href={article.url}><a>
                            <p style={{fontSize: '20px'}}>
                                <span><strong>{article.title || ''}</strong></span>
                            </p>
                            <p>{article.text || ''}</p>

                        </a></Link>
                        <Link  href={article.url}><a>Подробнее
                            →</a></Link>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ArticleList;
