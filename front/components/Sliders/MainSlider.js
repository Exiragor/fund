import Slider from 'react-slick';

const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    afterChange: (index) => {
        console.log(
            `Slider Changed to: ${index + 1}`
        );
    }
};

const MainSlider = () => {
    return (
        <div>
            <div className="main-slider__content main-slider__content--left">
                <div className="background-blur"
                     style={{ backgroundImage: 'url(/static/Maestro.jpg)' }} />
                <div className="blur_content">
                    <h3>Благотворительный концерт</h3>
                    <a className="button text-center button--main-slider" href="/">
                        <span>Подробнее</span>
                    </a>
                </div>
            </div>
            <div className="main-slider__content main-slider__content--right">
                <Slider {...settings}>
                    <div><div className="main-slider__slide" style={{ backgroundImage: 'url(/static/Maestro.jpg)' }} /></div>
                    <div><div className="main-slider__slide" style={{ backgroundImage: 'url(/static/conductor.jpg)' }} /></div>
                </Slider>
            </div>
        </div>
    );
}

export default MainSlider;