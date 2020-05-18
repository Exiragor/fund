import Link from 'next/link';

const Services = ({ activities, programs, services }) => <div className="content uslugi">
    <Link  href="/about/fond">
        <a>
            <div className="td-3">
                <img className="home_block_image" src="/main/direction.png" />
                {activities && <div dangerouslySetInnerHTML={{ __html: activities.value }} />}
            </div>
        </a>
    </Link>
    <Link  href="/projects">
        <a>
            <div className="td-3">
                <img className="home_block_image" src="/main/programs.png" />
                {programs && <div dangerouslySetInnerHTML={{ __html: programs.value }} />}
            </div>
        </a>
    </Link>
    <Link  href="/services">
        <a>
            <div className="td-3">
                <img className="home_block_image" src="/main/services.png" />
                {services && <div dangerouslySetInnerHTML={{ __html: services.value }} />}
            </div>
        </a>
    </Link>
</div>;

export default Services;
