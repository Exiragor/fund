import Link from 'next/link';
import {getImgUrlById} from '../../helpers/index';
import {dateFormat} from '../../helpers/index';

export default ({ item }) => <div className="entry-content with-sidebar">
    {item.date && <div  className="news-date">{dateFormat(item.date)}</div>}
    <img src={getImgUrlById(item.photo)} className="single-image" />
    <div dangerouslySetInnerHTML={{ __html: item.text }} />
    {item.link && <Link  href={item.link}><div id="open-zayavka">Заказать</div></Link>}
</div>
