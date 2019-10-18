import Services from '../../components/Catalog/List';

const programs = [
    { link: '/other', img: '/static/logo.jpg', title: 'Создание профессиональной песни, гимна, поздравления', description: 'Гимн организации, города (населенного пункта, республики, страны или значимого мероприятия) –  торжественное музыкально-поэтическое произведение, исполняемое в особых случаях...' },
];

export default () => {
    return (
        <div className="content" style={{ minHeight: 'calc(100vh - 370px)'}}>
            <div className="wrapper">
                <h3 className="entry-title">Программы</h3>
            </div>
            <Services services={programs} />
        </div>
    );
}