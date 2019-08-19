import Socials from '../../components/Socials/List';

export default () => {
    return (
        <div className="wrapper page-contact">
            <div className="contact-content" style={{minHeight: '680px'}}>
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
                </div>
            </div>
            <div className="contact_map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaf3a2441083ee34c7b37f9d51db62b18be1382d096f721b610b01be209e170f8&amp;source=constructor"
                    width="600" height="740" frameBorder="0"></iframe>
            </div>
        </div>
    );
};