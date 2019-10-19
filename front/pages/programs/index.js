import Services from '../../components/Catalog/List';

const programs = [
    { link: '/programs/1', img: '/static/Maestro.jpg', title: 'Вокальный проект «Маэстро»', description: 'Уникальный ансамбль поющих педагогов был основан в марте 2017 года в Подмосковном городе Королев. Мастерство и опыт профессионалов...' },
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