import Services from '../../components/Services/List';

const services = [
    { link: '/other', img: '/static/logo.jpg', title: 'Создание профессиональной песни, гимна, поздравления', description: 'Гимн организации, города (населенного пункта, республики, страны или значимого мероприятия) –  торжественное музыкально-поэтическое произведение, исполняемое в особых случаях...' }
];

export default () => {
    return (
        <div className="content">
            <div className="wrapper">
                <h1 className="entry-title">О фонде</h1>
            </div>
            <Services services={services} />
        </div>
    );
}