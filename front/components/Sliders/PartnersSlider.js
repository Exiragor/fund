import Slider from 'react-slick';

const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnFocus: true
};

const PartnersSlider = () => {
    return (
        <section className="content partners-slider">
            <div className="title">Партнеры фонда</div>
            <Slider {...settings}>
                <a href="/">
                    <img src="/static/logo.jpg" />
                </a>
                <a href="https://kosygin-rgu.ru/" target="_blank">
                    <img src="/static/РГУ-02 на светлом.png" />
                </a>
                <a href="/">
                    <img src="/static/conductor.jpg" />
                </a>
                <a href="/">
                    <img src="/static/logo.jpg" />
                </a>
                <a href="https://kosygin-rgu.ru/" target="_blank">
                    <img src="/static/РГУ-02 на светлом.png" />
                </a>
                <a href="/">
                    <img src="/static/conductor.jpg" />
                </a>
            </Slider>
        </section>
    );
};

export default PartnersSlider;