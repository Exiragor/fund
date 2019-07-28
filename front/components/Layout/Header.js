import Link from 'next/link';

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
                    <p><span>Мы поем, чтобы жить!</span></p>
                </div>
            </div>
            <div className="widget">
                <div>
                    <p><span><a href="tel:+74997559551">+7 (499) 755-95-51</a></span></p>
                </div>
            </div>
            <div className="widget">
                <Link prefetch href="/">
                    <a className="button">
                        <span className="text">Поддержать</span>
                    </a>
                </Link>
            </div>
        </div>
        <div className="header_menu">
            <div className="menu-mnu-container">
                <ul id="menu-mnu" className="menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-105">
                        <Link prefetch href="/other"><a>О нас</a></Link>
                        <ul className="sub-menu">
                            <li id="menu-item-124"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-124">
                                <Link prefetch href="/other"><a>О фонде</a></Link></li>
                            <li id="menu-item-123"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                <Link prefetch href="/other"><a>Как помочь</a></Link></li>
                            <li id="menu-item-122"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-122">
                                <Link prefetch href="/other"><a>Отзывы</a></Link></li>
                            <li id="menu-item-121"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-121">
                                <Link prefetch href="/other"><a>Партнеры</a></Link></li>
                            <li id="menu-item-120"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120">
                                <Link prefetch href="/other"><a>Экспертная работа</a></Link></li>
                            <li id="menu-item-119"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119">
                                <Link prefetch href="/other"><a>Сотрудники</a></Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-96">
                        <Link prefetch href="/other"><a>Программы</a></Link>
                    </li>
                    <li id="menu-item-93"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-93">
                        <Link prefetch href="/other"><a>Услуги</a></Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-90">
                        <Link prefetch href="/other"><a>Проекты</a></Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-103">
                        <Link prefetch href="/other"><a>Новости</a></Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                        <Link prefetch href="/other"><a>Контакты</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
</header>;

export default Header;
