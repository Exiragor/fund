import Link from 'next/link';
import cn from 'classnames';

const menu = [
    {   name: 'О нас',
        link: '/about/fond',
        children: [
            { name: 'О фонде', link: '/about/fond'},
            { name: 'Как помочь', link: '/about/help'},
            { name: 'Команда', link: '/about/partners'},
            { name: 'Достижения', link: '/about/results'},
            { name: 'Отчеты', link: '/about/reports'},
        ]
    },
    { name: 'Маэстро', link: '/maestro', children: []},
    { name: 'Программы', link: '/programs', children: []},
    { name: 'Услуги', link: '/services', children: []},
    { name: 'Проекты', link: '/projects', children: []},
    { name: 'Новости', link: '/news', children: []},
    { name: 'Контакты', link: '/contacts', children: []}
];

const Menu = () => 
<div className="menu-mnu-container">
    <ul id="menu-mnu" className="menu">
        {menu.map((item, index) =>
            <li className={ cn("menu-item menu-item-type-post_type menu-item-object-page",
                {'menu-item-has-children': item.children.length > 0}) }
                key={index}
            >
                <Link prefetch href={item.link}><a>{item.name}</a></Link>
                {item.children.length > 0 && <ul className="sub-menu">
                    {item.children.map((subItem, index) =>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page" key={index}>
                            <Link prefetch href={subItem.link}><a>{subItem.name}</a></Link>
                        </li>
                    )}
                </ul>}
            </li>
        )}
    </ul>
</div>;

export default Menu;