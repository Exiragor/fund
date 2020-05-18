export const aboutMenu = [
    { name: 'О фонде', link: '/about/fond'},
    { name: 'Как помочь', link: '/about/help' },
    { name: 'Команда', link: '/about/partners' },
    { name: 'Достижения', link: '/about/results' },
    { name: 'Отчеты', link: '/about/reports' },
];

export const maestroMenu = [
    { name: 'Музыка', link: '/maestro/music'},
    { name: 'Стихи', link: '/maestro/poems' },
    { name: 'Ноты', link: '/maestro/notes' },
    { name: 'Детям', link: '/maestro/kid' },
    { name: 'Право', link: '/maestro/law' },
    { name: 'Разное', link: '/maestro/other' },
];

export const mainMenu = [
    {   name: 'О нас',
        link: '/about/fond',
        children: aboutMenu
    },
    // {   name: 'Маэстро',
    //     link: '/maestro/music',
    //     children: maestroMenu
    // },
    { name: 'Маэстро', link: '/maestro', children: []},
    { name: 'Проекты', link: '/projects', children: []},
    { name: 'Услуги', link: '/services', children: []},
    { name: 'Новости', link: '/news', children: []},
    { name: 'Контакты', link: '/contacts', children: []}
];
