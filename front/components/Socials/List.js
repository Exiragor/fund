import FontAwesome from 'react-fontawesome';

const List = ({ size }) => {
    const socials = [
        { name: 'youtube', url: 'https://www.youtube.com/channel/UCLQY0YtdfQT1k13oaV29ffQ' },
        { name: 'vk', url: 'https://vk.com/nashapesnya_maestro' },
        { name: 'instagram', url: 'https://www.instagram.com/maestro_semenova/' },
    ];

    const svgYandex = {
        url: 'https://zen.yandex.ru/nashapesnya',
    };

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
            <a className="social-icon"
               href={svgYandex.url}
               target="_blank"
               style={{fontSize: `${size}px`, height: `${size}px`, display: 'inline-flex'}}
            >
                <svg width={`${size - 2}px`} height={`${size - 2}px`} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="social" d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4334 0C27.3011 11.5194 26.5478 17.9662 22.257 22.257C17.9662 26.5478 11.5194 27.3011 0 27.4334V29.1051C11.5194 29.2373 17.9662 29.9906 22.257 34.2814C26.4805 38.5049 27.2766 44.8173 27.4267 56H29.1118C29.2618 44.8173 30.0579 38.5049 34.2814 34.2814C38.5049 30.0579 44.8173 29.2618 56 29.1118V27.4266C44.8173 27.2766 38.5049 26.4805 34.2814 22.257C29.9906 17.9662 29.2373 11.5194 29.1051 0H27.4334Z" fill="white"/>
                </svg>
            </a>
        </span>
    );
};

export default List;
