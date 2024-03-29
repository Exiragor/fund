import Socials from '../../components/Socials/List';
import ContactForm from '../../components/Forms/ContactForm';
import contacts from "../../dictionaries/contacts";

export default () => {
    return (
        <div>
            <div className="wrapper page-contact" style={{zIndex: 1}}>
                <div className="contact-content contact-height">
                    <h1 className="entry-title">Контакты</h1>
                    <div className="entry-content">
                        <div className="contact_title">Благотворительный Фонд «Наша Песня»</div>
                        <div className="contact_adress">
                            <div className="contact_left_text">
                                <p className="mb-5">Телефон:</p>
                                <p className="mb-5">E-mail:</p>
                                <p className="mb-5">Адрес:</p>
                            </div>
                            <div className="contact_right_text">
                                <p className="mb-5"><a href="tel:+74997559551">{contacts.phone}</a></p>
                                <p className="mb-5"><a href="mailto:nashapesnya@list.ru">{contacts.email}</a></p>
                                <p className="mb-5">{contacts.address}</p>
                            </div>
                        </div>
                        <div className="contact_social">
                            <div className="contact_left_text" />
                            <div className="contact_right_text">
                                <Socials size="24" />
                            </div>
                        </div>
                        <div className="contact_title">Реквизиты</div>
                        <div className="contact_adress">
                            <div className="contact_left_text">
                                <p className="mb-5">ОГРН:</p>
                                <p className="mb-5">ИНН</p>
                                <p className="mb-5">БИК:</p>
                                <p className="mb-5">Р/с:</p>
                                <p className="mb-5">К/с:</p>
                            </div>
                            <div className="contact_right_text">
                                <p className="mb-5">{contacts.ogrn}</p>
                                <p className="mb-5">{contacts.inn}</p>
                                <p className="mb-5">{contacts.bik}</p>
                                <p className="mb-5">{contacts.rc}</p>
                                <p className="mb-5">{contacts.kc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_map">
                    <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaf3a2441083ee34c7b37f9d51db62b18be1382d096f721b610b01be209e170f8&amp;source=constructor"
        width="600" height="740" frameBorder="0"/>
                </div>
            </div>
            <div className="ask-block" style={{marginBottom: '20px'}}>
                <div className="ask_background">
                    <div className="ask-content">
                        <div className="ask-title">Остались вопросы?</div>
                        <div className="ask-description">Напишите нам, и мы ответим на все интересующие вопросы</div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};
