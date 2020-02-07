import Link from 'next/link';
import {getImgUrlByIdWithParams} from '../../helpers/index';

export default ({ service }) => 
<div className="cards">
    <Link href={`/${service.category}s/detail?id=${service.id}`} prefetch>
        <a>
        <div className="services_image" style={{ backgroundImage: `url("${getImgUrlByIdWithParams(service.photo, {width: 1080, height: 780})}")` }}>
            <div className="services_title"><h2 className="services-title entry-title">{service.name}</h2></div>
        </div>
        </a>
    </Link>
    <div className="services-content entry-content">
        <Link href={`/${service.category}s/detail?id=${service.id}`} prefetch>
            <a href={`/${service.category}s/detail?id=${service.id}`}>
                <p>{service.description}...</p>
            </a>
        </Link>
        <Link href={`/${service.category}s/detail?id=${service.id}`} prefetch>
            <a className="readmore" href={`${service.category}s/detail?id=${service.id}`}>Подробнее <span> →</span></a>
        </Link>
    </div>
</div>