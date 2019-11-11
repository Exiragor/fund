import Link from 'next/link';
import {getImgUrlById} from '../../helpers/index';

export default ({ item }) => <div className="entry-content">
    <img src={getImgUrlById(item.photo)} className="single-image" />
    <div dangerouslySetInnerHTML={{ __html: item.text }} />
    {item.button && <Link prefetch href={item.button.link}><div id="open-zayavka">{item.button.text}</div></Link>}
</div>