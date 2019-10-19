import Link from 'next/link';

export default ({ item }) => <div className="entry-content">
    <img src={item.img} className="single-image" />
    {item.text && item.text.map(p => <p>{p}</p>)}
    {item.button && <Link prefetch href={item.button.link}><div id="open-zayavka">{item.button.text}</div></Link>}
</div>