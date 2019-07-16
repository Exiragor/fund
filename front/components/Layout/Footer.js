import FontAwesome from 'react-fontawesome';

const Footer = () =>
<footer>
    <div className="footer widget mx-30">
        <p className="text text-left">
            <span>© Фонд «Наша песня»</span><br />
            <span>Реквизиты фонда «Наша песня»</span><br />
            <span>ОГРН: 1157700006892</span><br />
            <span>ИНН: 7729460778</span> <span>КПП: 772901001</span><br />
            <span>БИК 044525225</span> <span>в ПАО Сбербанк России</span><br />
            <span>Р/с 40703810638000002036</span><br />
            <span>К/с 30101810400000000225</span>
        </p>
        <p className="text-left"><span><a href="/" className="grey_link" target="_blank">Политика обработки персональных данных</a></span></p>
    </div>
    <div className="footer widget">
        <h5>БУДЬ В КУРСЕ НОВОСТЕЙ</h5>
        <input type="email" name="your-email" size="40" placeholder="Ваш email" />
    </div>
    <div className="footer widget">
        <h5>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h5>
        <a className="social-icon" href="https://vk.com" target="_blank"><FontAwesome name="vk" /></a>
        <a className="social-icon" href="https://ok.ru/" target="_blank"><FontAwesome name="odnoklassniki" /></a>
    </div>
</footer>;

export default Footer;