import Socials from '../Socials/List';
import {useState} from "react";
import MiniSliderPortal from "../Sliders/MiniSliderPortal";
import {useListener} from 'react-bus';

const Footer = () => {
    const [miniSliders, setMiniSliders] = useState([]);

    useListener('mini-sliders:refresh', function () {
        setMiniSliders([...document.getElementsByClassName('js-mini-slider')]);
    });

    return (
        <footer>
            <div className="footer widget mx-30">
                <p className="text text-left">
                    <span>© Благотворительный Фонд «Наша песня»</span><br />
                    <span>Реквизиты Благотворительного Фонда «Наша Песня»</span><br />
                    <span>ОГРН: 1195000002922</span><br />
                    <span>ИНН: 5038143310</span><br />
                    <span>БИК 044525225</span> <span>в ПАО Сбербанк России</span><br />
                    <span>Р/с 40701810240000000415</span><br />
                    <span>К/с 30101810400000000225</span>
                </p>
                {/*<p className="text-left"><span><a href="/" className="grey_link" target="_blank">Политика обработки персональных данных</a></span></p>*/}
            </div>
            {/*<div className="footer widget">*/}
            {/*<h5>БУДЬ В КУРСЕ НОВОСТЕЙ</h5>*/}
            {/*<input type="email" name="your-email" size="40" placeholder="Ваш email" />*/}
            {/*</div>*/}
            <div className="footer widget">
                <h5>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h5>
                <Socials size="20px" />
            </div>
            <MiniSliderPortal sliders={miniSliders} />
        </footer>
    );
};

export default Footer;