import Link from 'next/link';

const HelpInfo = () =>
<div className="grey_content">
    <div className="title">Как помочь?</div>
    <div className="content_two">
        <Link prefetch href="/contacts">
            <a>
                <div id="u510" className="text">
                    <p><span>Деньгами</span></p>
                    <p>Поддерживая проекты Благотворительного Фонда «Наша Песня», Вы помогаете взрастить
                        новое поколение детей и молодежи, решая проблемы жестокости, бездуховности,
                        безнравственности, бескультурья. Вы можете перевести  сумму любым удобным для Вас способом.
                    </p>
                </div>
                <div className="img" style={{ backgroundImage: 'url(/static/деньги.jpg)'}}>
                    <p>Деньгами</p>
                </div>

            </a>
        </Link>
    </div>
    <div className="content_two">
        <Link prefetch href="/contacts">
            <a>
                <div id="u510" className="text">
                    <p><span>Делом</span></p>
                    <p>Мы с радостью примем в команду добровольцев, способных выполнять работу по душе.
                        Можно стать волонтером на наших мероприятиях. А можно оказать профессиональную помощь:
                        нам нужны люди, владеющие нотными редакторами «Sibelius», «Finale», «Capella»;
                        педагоги творческих дисциплин, видеографы, аранжировщики, музыканты и певцы.
                        Если Вы хотите применить свои способности для благих дел – оставьте координаты.
                        Мы с Вами обязательно свяжемся.
                    </p>
                </div>
                <div className="img" style={{ backgroundImage: 'url(/static/Делом.jpg)'}}>
                    <p>Делом</p>
                </div>
            </a>
        </Link>
    </div>
</div>;

export default HelpInfo;