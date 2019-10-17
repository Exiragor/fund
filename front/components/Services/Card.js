export default ({ service }) => 
<div className="cards">
    <a href={service.link}>
    <div className="services_image" style={{ backgroundImage: `url("${service.img}")` }}>
    <div className="services_title">
    <h2 className="services-title entry-title">{service.title}</h2></div>
    </div>
    </a><div className="services-content entry-content"><a href={service.link}>
    <p>{service.description}</p>
    </a><a className="readmore" href={service.link}>Подробнее <span> →</span></a>
    </div>
</div>