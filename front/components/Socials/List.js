import FontAwesome from 'react-fontawesome';

const List = ({ size }) => {
    const socials = [
        { name: 'youtube', url: 'https://www.youtube.com/channel/UCLQY0YtdfQT1k13oaV29ffQ' },
        { name: 'vk', url: 'https://vk.com/maestrosemenova017' },
        { name: 'instagram', url: 'https://www.instagram.com/maestro_semenova/' },
    ];

    return (
        <span>
            {socials.map(social =>
                <a className="social-icon" href={social.url} target="_blank" style={{fontSize: size}}>
                    <FontAwesome name={social.name} />
                </a>
            )}
        </span>
    );
};

export default List;