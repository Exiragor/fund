import Link from 'next/link';

export default ({ item }) => <div className="entry-content">
    <img src={item.img} />
    <p>{item.text}</p>
    {item.button && <Link prefetch href={item.button.link}><div id="open-zayavka">{item.button.text}</div></Link>}
</div>