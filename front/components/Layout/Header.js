import Link from 'next/link';
import cn from 'classnames';

const menu = [
    {   name: 'О нас',
        link: '/about/fond',
        children: [
            { name: 'О фонде', link: '/about/fond'},
            { name: 'Как помочь', link: '/about/help'},
            { name: 'Партнеры', link: '/other'},
            { name: 'Достижения', link: '/other'},
            { name: 'Отчеты', link: '/other'},
        ]
    },
    { name: 'Маэстро', link: '/other', children: []},
    { name: 'Программы', link: '/other', children: []},
    { name: 'Услуги', link: '/other', children: []},
    { name: 'Проекты', link: '/other', children: []},
    { name: 'Новости', link: '/other', children: []},
    { name: 'Контакты', link: '/contacts', children: []}
];

// noinspection BadExpressionStatementJS
const Header = () => <header>
    <div className="header" data-label="шапка">
        <div className="header_content">
            <div className="widget">
                <Link prefetch href="/">
                    <a>
                        <img className="img" src="/static/logo.jpg" tabIndex="0" />
                    </a>
                </Link>
            </div>
            <div className="arial widget">
                <div>
                    <p><span>Нет ничего достойней и красивей,<br /> Чем петь во славу Бога и России!</span></p>
                </div>
            </div>
            <div className="widget">
                <div>
                    <p><span><a href="tel:+74997559551">+7 (499) 755-95-51</a></span></p>
                    <p><span><a href="mailto:nashapesnya@list.ru">nashapesnya@list.ru</a></span></p>
                </div>
            </div>
            <div className="widget">
                <Link prefetch href="/contacts">
                    <a className="button">
                        <span className="text">Поддержать</span>
                    </a>
                </Link>
            </div>
        </div>
        <div className="header_menu">
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
            </div>
        </div>
    </div>
</header>;

export default Header;
