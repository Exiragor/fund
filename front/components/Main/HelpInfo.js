import Link from 'next/link';
import {getImgUrlByIdWithParams} from "../../helpers";

const HelpInfo = ({articles}) =>
<div className="grey_content">
    <div className="title">Как помочь?</div>
    {articles && articles.map(article =>
        <div className="content_two" key={article.id}>
            <Link href={article.link}>
                <a>
                    <div id="u510" className="text">
                        <p><span>{article.title}</span></p>
                        <p>{article.text}</p>
                    </div>
                    <div className="img" style={{ backgroundImage: `url(${getImgUrlByIdWithParams(article.photo, {width: 1104, height: 680})})`}}>
                        <p>{article.title}</p>
                    </div>
                </a>
            </Link>
        </div>
    )}
</div>;

export default HelpInfo;
