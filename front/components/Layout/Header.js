const Header = () => <header>
    <div className="header" data-label="шапка">
        <div className="header_content">
            <div className="widget">
                <a href="/">
                    <img className="img" src="/static/logo.jpg" tabIndex="0" />
                </a>
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
                <a className="button" href="/">
                    <span className="text">Поддержать</span>
                </a>
            </div>
        </div>
        <div className="header_menu">
            <div className="menu-mnu-container">
                <ul id="menu-mnu" className="menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-105">
                        <a href="/">О нас</a>
                        <ul className="sub-menu">
                            <li id="menu-item-124"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-124">
                                <a href="/">О фонде</a></li>
                            <li id="menu-item-123"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                                <a href="/">Как помочь</a></li>
                            <li id="menu-item-122"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-122">
                                <a href="/">Отзывы</a></li>
                            <li id="menu-item-121"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-121">
                                <a href="/https://obrazfund.ru/o-nas/partneryi/">Партнеры</a></li>
                            <li id="menu-item-120"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120">
                                <a href="/">Экспертная работа</a></li>
                            <li id="menu-item-119"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-119">
                                <a href="/">Сотрудники</a></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-96">
                        <a href="/">Программы</a>
                    </li>
                    <li id="menu-item-93"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-93">
                        <a href="/">Услуги</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-90">
                        <a href="/">Проекты</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-103">
                        <a href="/">Новости</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a
                        href="/">Контакты</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>;

export default Header;
