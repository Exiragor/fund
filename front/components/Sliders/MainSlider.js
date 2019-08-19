import { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const MainSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: true,
        beforeChange: (oldIndex, newIndex) => setSlideIndex(newIndex)
    };

    const slides = [
        {
            img: '/static/bridge.jpg',
            title: 'Благотворительный Фонд "Наша песня" сделал красивый подарок жителям Подмосковья к Юбилею',
            text: 'Благотворительный Фонд "Наша песня" сделал красивый подарок жителям Подмосковья к предстоящему ' +
            'Юбилею Московской области.отметил начало своей деятельности съемкой клипа "Стожок" ' +
            'с участием Вокального проекта "Маэстро".',
            url: '/other'
        },
        {
            img: '/static/laurel.jpg',
            title: 'Ольга Семенова стала Лауреатом Александро-Невского Фестиваля',
            text: 'Композитор и поэт Ольга Семенова стала Лауреатом Александро-' +
            'Невского Фестиваля духовно-патриотической песни в Санкт-Петербурге...',
            url: '/other'
        },
        {
            img: '/static/logo.jpg',
            text: 'Теперь у нашего Фонда есть собственный гимн!..',
            url: '/other'
        }
    ];

    return (
        <div>
            <div className="main-slider__content main-slider__content--left">
                <div className="background-blur"
                     style={{ backgroundImage: 'url(/static/Maestro.jpg)' }} />
                <div className="blur_content">
                    {slides[slideIndex].title && <h3>{slides[slideIndex].title}</h3>}
                    {slides[slideIndex].text && <p>{slides[slideIndex].text}</p>}
                    {slides[slideIndex].url &&
                        <Link prefetch href={slides[slideIndex].url}>
                            <a className="button text-center button--main-slider">
                                <span>Подробнее</span>
                            </a>
                        </Link>
                    }
                </div>
            </div>
            <div className="main-slider__content main-slider__content--right">
                <Slider {...settings}>
                    {slides.map(slide =>
                        <div key={slide.img}>
                            <div
                                className="main-slider__slide"
                                style={{ backgroundImage: `url("${slide.img}")` }}
                            />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
}

export default MainSlider;