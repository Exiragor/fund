import Link from 'next/link';
import {getImgUrlByIdWithParams} from '../../helpers/index';

export default ({ service }) =>
<Link href={`/${service.category}s/detail?id=${service.id}`} >
    <div className="cards">
        <div className="services_image" style={{ backgroundImage: `url("${getImgUrlByIdWithParams(service.photo, {width: 1080, height: 780})}")` }} />
        <div className="services-content entry-content">
            <h4 className="services-title">{service.name}</h4>
            <a href={`/${service.category}s/detail?id=${service.id}`}>
                <p>{service.description}...</p>
            </a>
            <a className="readmore" href={`${service.category}s/detail?id=${service.id}`}>Подробнее <span> →</span></a>
        </div>
    </div>
</Link>
