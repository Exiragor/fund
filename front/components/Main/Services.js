import Link from 'next/link';

const Services = () => <div className="content uslugi">
    <Link prefetch href="/about/fond">
        <a>
            <div className="td-3">
                <img className="home_block_image" src="/static/main/direction.png" />
                <h3>Сферы деятельности</h3>
                    <p> • Реализация духовно-патриотических, просветительских, общекультурных
                        проектов и социально-значимых инициатив.<br />
                        • Поддержка и популяризация патриотического искусства. В частности,
                        создание и популяризация современной, профессиональной песни,
                        способной объединить поколения и народы.<br />
                        • Добровольческое движение<br />
                        • Фестивальная, концертная деятельность и т.д.
                    </p>
            </div>
        </a>
    </Link>
    <Link prefetch href="/programs">
        <a>
            <div className="td-3">
                <img className="home_block_image" src="/static/main/programs.png" />
                <h3>Программы</h3>
                <p> • Поющие сады<br />
                    • Творим добро<br />
                    • За здоровьем -  с песней!
                </p>
            </div>
        </a>
    </Link>
    <Link prefetch href="/services">
        <a>
            <div className="td-3">
                <img className="home_block_image" src="/static/main/services.png" />
                <h3>Услуги</h3>
                <p> • Создание профессиональной песни, гимна, поздравления<br />
                • Патриотические фестивали, концерты, флешмобы<br />
                • Благотворительные акции<br />
                • Здоровьесберегающие мероприятия для детей и взрослых.<br />
                • Творческие мастер-классы<br />
                • Создание видео ролика, клипа, фильма<br />
                • Аренда концертного звука
                </p>
            </div>
        </a>
    </Link>
</div>;

export default Services;