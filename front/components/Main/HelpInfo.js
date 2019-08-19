import Link from 'next/link';

const HelpInfo = () =>
<div className="grey_content">
    <div className="title">Как помочь?</div>
    <div className="content_two">
        <Link prefetch href="/contacts">
            <a>
                <div id="u510" className="text">
                    <p><span>Деньгами</span></p>
                    <p>Поддерживая проекты благотворительного фонда «Образ жизни», вы&nbsp;помогаете&nbsp;детям-сиротам,
                        людям с инвалидностью, одиноким пожилым людям, бездомным животным и их защитникам – всем, кому
                        необходимо действенное участие в решении проблем. Вы можете перевести деньги любым удобным вам
                        способом.</p>
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
                    <p>Среди широкого разнообразия направлений работы фонда каждый может найти себе дело по душе. Можно
                        стать волонтёром на наших мероприятиях, автоволонтёром, посещать социальные учреждения. А можно
                        оказывать профессиональную помощь: нам всегда требуются педагоги, фотографы и видеографы, мастера
                        рукоделия. Если Вы хотите применить свои способности для благих дел, оставьте ваши контактные
                        данные, и мы с вами свяжемся!</p>
                </div>
                <div className="img" style={{ backgroundImage: 'url(/static/Maestro.jpg)'}}>
                    <p>Делом</p>
                </div>
            </a>
        </Link>
    </div>
</div>;

export default HelpInfo;