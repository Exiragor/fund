import EmployeeList from '../../components/Company/EmployeeList';
import Aside from '../../components/Navigation/Aside';

const aboutFondPage = () => {
    const menu = [
        { name: 'О фонде', url: '/about/fond', currentPage: true },
        { name: 'Как помочь', url: '/other' },
        { name: 'Партнеры', url: '/other' },
        { name: 'Достижения', url: '/other' },
        { name: 'Отчеты', url: '/other' },
    ];
    const employeesMain = [
        { img: '/static/employees/Семенова О..jpg', position: 'Основатель Фонда', name: 'Семенова Ольга Филипповна'},
        { img: '/static/employees/Президент Фонда.JPG', position: 'Президент Фонда', name: 'Лебедев Михаил Александрович'}
    ];
    const employees = [
        { img: '/static/employees/Азаров ЮФ.jpg', name: 'Азаров Юрий Федорович', text: 'Председатель РОО ' +
            '«Кубанское землячество», генерал – полковник Таможенной службы РФ, полковник милиции, ' +
            'кандидат юридических наук, член Союза Писателей России.'},
        { img: '/static/employees/Леденева Ирина Николаевна.jpg', name: 'Леденева Ирина Николаевна', text: 'Профессор РГУ ' +
            'имени Косыгина, Руководитель Международной школы дизайна ESMOD MOSCOU, ' +
            'Руководитель Международной школы обуви и кожи ASSOMAC, Кандидат технических наук.'},
        { img: '/static/employees/Настоятель храма Косьмы и Домиана Виктор Нестеров.jpg', name: 'Виктор Викторович Нестеров', text: 'Настоятель Храма ' +
            'бессребрянников и чудотворцев Косьмы и Домиана Асийских.'}
    ];

    return (
        <div className="wrapper">
            <h1 className="entry-title">О фонде</h1>
            <div className="entry-content with-sidebar">
                <p>
                    «Наша Песня» - Благотворительный Фонд поддержки патриотического искусства и социально –
                    культурных инициатив – это некоммерческая организация, призванная аккумулировать и
                    продвигать высокохудожественные произведения в современной музыке, литературе и
                    других видах профессионального творчества, способствующие духовному и культурному оздоровлению общества.
                </p>
                <div className="missia">
                    <strong>Миссия</strong><br />
                    Творить во славу Бога и России!
                </div>
                <div className="missia">
                    <strong>Цель</strong><br />
                    Духовно-патриотическое воспитание детей и молодежи посредством лучших авторских произведений.
                    Создание условий для неразрывной связи современной духовно-патриотической песни с
                    народной музыкой, и настоящими талантами из народа.
                </div>
                <h3>Руководство</h3>
                <EmployeeList employees={employeesMain} />
                <h3>ПОПЕЧИТЕЛЬСКИЙ СОВЕТ</h3>
                <EmployeeList employees={employees} />
            </div>
            <Aside sections={menu} />
        </div>
    )
};

export default aboutFondPage;