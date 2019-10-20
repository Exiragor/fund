import Detail from '../../components/Catalog/Detail';

const news = {
    title: 'Презентация Благотворительного фонда "Наша песня"',
    img: '/static/presentation.jpg',
    text: [
        'На очередной сессии коммуникационного Форума "Творим добро" собрались руководители общественных организаций, основной вид деятельности которых связан с патриотическим воспитанием детей и молодёжи. Это очень важное событие для всех, особенно для нашего новорожденного фонда!',
        'Мы на деле показали, какая это мощь - современная красивая, авторская, патриотическая песня... как она объединяет поколения и народы, какой имеет воспитательный эффект! Мы обрели серьёзных партнёров и заручились взаимопомощью.',
        'Выражаем сердечную благодарность Председателю Попечительского совета Благотворительного Фонда "Наша песня", генерал-лейтенанту Азарову Ю.Ф. и продюсеру Дымченко Ж.В. за внимание и единство целей!'
    ]
};  

const NewsDetail = () => {
    return (
        <div className="wrapper">
            <h1 className="entry-title">{news.title}</h1>
            <Detail item={news} />
        </div>
    );
}

export default NewsDetail;