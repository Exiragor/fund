import Link from 'next/link';

export default ({ service }) => 
<div className="cards">
    <Link href={service.link} prefetch>
        <a>
        <div className="services_image" style={{ backgroundImage: `url("${service.img}")` }}>
            <div className="services_title"><h2 className="services-title entry-title">{service.title}</h2></div>
        </div>
        </a>
    </Link>
    <div className="services-content entry-content">
        <Link href={service.link} prefetch>
            <a href={service.link}>
                <p>{service.description}</p>
            </a>
        </Link>
        <Link href={service.link} prefetch><a className="readmore" href={service.link}>Подробнее <span> →</span></a></Link>
    </div>
</div>