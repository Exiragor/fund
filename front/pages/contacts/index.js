import Socials from '../../components/Socials/List';
import ContactForm from '../../components/Forms/ContactForm';

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
                                <p>Телефон:</p>
                                <p>E-mail:</p>
                                <p>Адрес:</p>
                            </div>
                            <div className="contact_right_text">
                                <p><a href="tel:+74997559551">+7 (499) 755-95-51</a></p>
                                <p><a href="mailto:nashapesnya@list.ru">nashapesnya@list.ru</a></p>
                                <p>Москва ул.Садовническая дом 33, стр1, офис 506</p>
                            </div>
                        </div>
                        <div className="contact_social">
                            <div className="contact_left_text" />
                            <div className="contact_right_text">
                                <Socials size="24px" />
                            </div>
                        </div>
                        <div className="contact_title">Реквизиты</div>
                        <div className="contact_adress">
                            <div className="contact_left_text">
                                <p>ОГРН:</p>
                                <p>ИНН</p>
                                <p>БИК:</p>
                                <p>Р/с:</p>
                                <p>К/с:</p>
                            </div>
                            <div className="contact_right_text">
                                <p>1195000002922</p>
                                <p>5038143310</p>
                                <p>044525225 в ПАО Сбербанк России</p>
                                <p>40701810240000000415</p>
                                <p>30101810400000000225</p>
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