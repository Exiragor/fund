import NewsList from '../../components/News/List';
import Aside from '../../components/Navigation/Aside';

const news = [
    { title: 'Презентация Благотворительного фонда "Наша песня"', link: '/news/1', img: '/static/presentation.jpg', date: '19 октября 2019', description: 'В канун Дня Российского флага, в самом центре Москвы, в Гостином дворе, состоялась презентация Благотворительного фонда "Наша песня", основанного для поддержки и продвижения духовно- патриотического искусства.' },
    { title: 'Бал «Деловая Россия»', img: '/static/bal.jpg', link: '/news/2', date: '19 октября 2019', description: 'Август 2019 Патриотическая часть большой концертной программы, заявленная нашим фондом, адресовалась, прежде всего, кадетам. Мы готовы наполнить смыслом и духовным содержанием каждый позитивный и созидательный проект.' },
];

export default () => {
    return (
        <div className="wrapper">
            <h1 className="entry-title">Новости</h1>
            <div className="entry-content with-sidebar">
                <NewsList news={news} />
            </div>
            <Aside sections={[{ name: 'Шаг за шагом', url: '/news'}]} currentPage="Шаг за шагом" />
        </div>
    );
}