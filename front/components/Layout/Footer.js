import Socials from '../Socials/List';
import {useState} from "react";
import MiniSliderPortal from "../Sliders/MiniSliderPortal";
import EmailForm from "../Forms/EmailForm";
import {useListener} from 'react-bus';
import dynamic from 'next/dynamic'
import contacts from "../../dictionaries/contacts";

const DynamicComponentWithNoSSR = dynamic(
    () => import('../Media/MediaPortal'),
    { ssr: false }
);

const Footer = () => {
    const [miniSliders, setMiniSliders] = useState([]);
    const [audios, setAudios] = useState([]);

    useListener('mini-sliders:refresh', function () {
        setMiniSliders([...document.getElementsByClassName('js-mini-slider')]);
    });

    useListener('audios:refresh', function () {
        setAudios([...document.getElementsByClassName('js-media-audio')]);
    });

    return (
        <footer>
            <div className="footer widget mx-30">
                <p className="text text-left">
                    <span>© Благотворительный Фонд «Наша песня»</span><br />
                    <span>Реквизиты Благотворительного Фонда «Наша Песня»</span><br />
                    <span>ОГРН: {contacts.ogrn}</span><br />
                    <span>ИНН: {contacts.inn}</span><br />
                    <span>БИК {contacts.bik}</span><br />
                    <span>Р/с {contacts.rc}</span><br />
                    <span>К/с {contacts.kc}</span>
                </p>
                <p className="text-left">
                    <span>
                        <a href="/static/docs/download.docx" style={{fontWeight: 'bold'}} target="_blank">
                            Политика обработки персональных данных
                        </a>
                    </span>
                </p>
            </div>
            <div className="footer widget">
                <h5>БУДЬ В КУРСЕ НОВОСТЕЙ</h5>
                <div>
                    <EmailForm />
                </div>
            </div>
            <div className="footer widget">
                <h5>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h5>
                <Socials size="20px" />
            </div>
            <MiniSliderPortal sliders={miniSliders} />

            <DynamicComponentWithNoSSR audios={audios} />
        </footer>
    );
};

export default Footer;
