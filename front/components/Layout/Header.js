import Link from 'next/link';
import Menu from '../Navigation/Menu';


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
            <Menu />
        </div>
    </div>
</header>;

export default Header;
