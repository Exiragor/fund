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
            img: '/static/Maestro2.JPG',
            title: 'Вокальный проект «Маэстро»',
            text: 'один из приоритетных музыкальных духовно-патриотических проектов, ' +
            'избранных Благотворительным фондом «Наша песня», в качестве объекта оказания всесторонней поддержки. ',
            url: '/other'
        },
        {
            img: '/static/logo.jpg',
            title: 'Гимн фонда',
            text: 'Гимн и эмблема (логотип) фонда – характерный знак серьезной, ' +
            'авторитетной организации. Если Официальный сайт и страницы в' +
            'социальных сетях – явление распространенное, то наличие собственного гимна – пока воспринимается ' +
            'как роскошь, а зря…',
            url: '/other'
        },
        {
            img: '/static/fund.jpg',
            title: '«Наша песня»',
            text: 'Предметом деятельности нашего фонда является разработка и реализация духовных, ' +
            'патриотических, культурных программ и социальных проектов, направленных на оздоровление общества, ' +
            'а если конкретно – «вывод из подполья» потрясающе красивых, содержательных и полезных ' +
            'в воспитательном смысле, современных песен. ',
            url: '/about/fond'
        }
    ];

    return (
        <div>
            <div className="main-slider__content main-slider__content--left">
                <div className="background-blur"
                     style={{ backgroundImage: `url("${slides[slideIndex].img}")` }} />
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