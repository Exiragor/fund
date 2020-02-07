import Slider from 'react-slick';
import Link from 'next/link';
import {getImgUrlById} from "../../helpers";

const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnFocus: true
};

const getLinkBySlide = (slide) => {
    return slide.url ?
                <a href={slide.url} target="_blank" key={slide.id}>
                    <img src={getImgUrlById(slide.photo)} alt={slide.title} />
                </a>
                :
                <Link prefetch href={slide.link} key={slide.id}>
                    <a href="javascript:void(0)">
                        <img src={getImgUrlById(slide.photo)} alt={slide.title} />
                    </a>
                </Link>
};

const PartnersSlider = ({slides}) => {
    return (
        <section className="content partners-slider">
            <div className="title">Партнеры фонда</div>
            <Slider {...settings}>
                {slides && slides.map((slide => getLinkBySlide(slide)))}
            </Slider>
        </section>
    );
};

export default PartnersSlider;