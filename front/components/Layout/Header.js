import Link from 'next/link';
import React, { useState } from 'react';
import Menu from '../Navigation/Menu';
import { YMInitializer } from 'react-yandex-metrika';
import contacts from "../../dictionaries/contacts";
import SupportForm from "../Forms/SupportForm";
import { Modal } from 'antd';


const Header = () => {
    const [showSupportModal, setShowSupportModal] = useState(false);

    const handleCancel = e => {
        setShowSupportModal(false);
    };

    const openSupportForm = () => {
        setShowSupportModal(true);
    }

    return (
        <header>
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
                    <div className="arial widget color-red">
                        <div>
                            <p><span>Нет ничего достойней и красивей,<br /> Чем петь во славу Бога и России!</span></p>
                        </div>
                    </div>
                    <div className="widget color-blue">
                        <div>
                            <p><span><a href={`tel:${contacts.phoneNative}`}>{contacts.phone}</a></span></p>
                            <p><span><a href={`mailto:${contacts.email}`}>{contacts.email}</a></span></p>
                        </div>
                    </div>
                    <div className="widget">
                        <a className="button" onClick={openSupportForm}>
                            <span className="text">Поддержать</span>
                        </a>
                        <Modal
                            title="Сделать пожертвование"
                            visible={showSupportModal}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <SupportForm />
                        </Modal>
                    </div>
                </div>
                <div className="header_menu">
                    <Menu />
                </div>
            </div>
        </header>
    );
}

export default Header;
