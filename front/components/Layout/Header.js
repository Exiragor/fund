import Link from 'next/link';
import Menu from '../Navigation/Menu';
import { YMInitializer } from 'react-yandex-metrika';
import contacts from "../../dictionaries/contacts";


const Header = () => <header>
    <YMInitializer accounts={[38978210]} />
    <div className="header" data-label="шапка">
        <div className="header_content">
            <div className="widget">
                <Link  href="/">
                    <a>
                        <img className="img" src="/logo.jpg" tabIndex="0" />
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
                    <p><span><a href={`tel:${contacts.phoneNative}`}>{contacts.phone}</a></span></p>
                    <p><span><a href={`mailto:${contacts.email}`}>{contacts.email}</a></span></p>
                </div>
            </div>
            <div className="widget">
                <Link  href="/contacts">
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
