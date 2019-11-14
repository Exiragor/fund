import { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import {getImgUrlByIdWithParams, getImgUrlById} from '../../helpers/index'

const MainSlider = ({ slides }) => {
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

    return (
        <div>
            <div className="main-slider__content main-slider__content--left">
                <div className="background-blur"
                     style={{ backgroundImage: `url("${getImgUrlByIdWithParams(slides[slideIndex].photo, {width: 360, height: 500})}")` }} />
                <div className="blur_content">
                    {slides[slideIndex].title && <h3>{slides[slideIndex].title}</h3>}
                    {slides[slideIndex].text && <p>{slides[slideIndex].text}</p>}
                    {slides[slideIndex].url &&
                        <a href={slides[slideIndex].url}
                           target="_blank"
                           className="button text-center button--main-slider"
                        >
                            <span>Подробнее</span>
                        </a>
                    }
                    {!slides[slideIndex].url && slides[slideIndex].link &&
                        <Link prefetch href={slides[slideIndex].link}>
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
                        <div key={slide.photo}>
                            <div
                                className="main-slider__slide"
                                style={{ backgroundImage: `url("${getImgUrlById(slide.photo)}")` }}
                            />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
}

export default MainSlider;