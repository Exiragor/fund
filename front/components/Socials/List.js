import FontAwesome from 'react-fontawesome';

const List = ({ size }) => {
    const socials = [
        { name: 'youtube', url: 'https://www.youtube.com/c/НАШАПЕСНЯ21/' },
        { name: 'vk', url: 'https://vk.com/nashapesnya_maestro' },
        { name: 'instagram', url: 'https://www.instagram.com/maestro_semenova/' },
    ];

    return (
        <span className="socials">
            {socials.map(social =>
                <a className="social-icon"
                   href={social.url}
                   target="_blank"
                   style={{fontSize: `${size}px`}} key={social.name}
                >
                    <FontAwesome name={social.name} />
                </a>
            )}
        </span>
    );
};

export default List;
