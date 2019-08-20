import Aside from '../../components/Navigation/Aside';
import List from '../../components/Articles/List';
import {menu} from './menu';

const HelpPage = () => {
    const items = [
        { url: '/other', title: 'Деньгами', img: '/static/деньги.jpg', imgTitle: 'Деньгами',
            text: 'Поддерживая проекты Благотворительного Фонда ' +
            '«Наша Песня», Вы помогаете взрастить новое поколение детей и молодежи, решая проблемы жестокости, ' +
            'бездуховности, безнравственности, бескультурья.\n' +
            'Вы можете перевести  сумму любым удобным для Вас способом.'},
        { url: '/other', title: 'Делом', img: '/static/Делом.jpg', imgTitle: 'Делом',
            text: 'Мы с радостью примем в команду добровольцев, ' +
            'способных выполнять работу по душе. Можно стать волонтером на наших мероприятиях. ' +
            'А можно оказать профессиональную помощь: нам нужны люди, владеющие нотными редакторами «Sibelius», ' +
            '«Finale», «Capella»; педагоги творческих дисциплин, видеографы, аранжировщики, музыканты и певцы. ' +
            'Если Вы хотите применить свои способности для благих дел – оставьте координаты. ' +
            'Мы с Вами обязательно свяжемся.'},
    ];

    return (
        <div className="wrapper">
            <h1 className="entry-title">Как помочь</h1>
            <div className="entry-content with-sidebar">
                <List articles={items} width="45%" />
            </div>
            <Aside sections={menu} currentPage="Как помочь" />
        </div>
    );
};

export default HelpPage;
