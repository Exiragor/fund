import Link from 'next/link';
import {getImgUrlById} from '../../helpers/index';
import {dateFormat} from '../../helpers/index';

export default ({ item }) => <div className="entry-content with-sidebar">
    <div  className="news-date">{dateFormat(item.date)}</div>
    <img src={getImgUrlById(item.photo)} className="single-image" />
    <div dangerouslySetInnerHTML={{ __html: item.text }} />
    {item.button && <Link prefetch href={item.button.link}><div id="open-zayavka">{item.button.text}</div></Link>}
</div>