import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import {getImgUrlById} from "../../helpers";
import {getAllByPrefix} from "../../api/slides";

const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    pauseOnFocus: true
};

const MiniSlider = ({prefix}) => {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        getAllByPrefix('mini-slider', prefix).then(res => {
            setSlides(res.data);
        });
    }, []);

    return (
        <div class="mini-slider">
            {slides.length && <Slider {...settings}>
                {slides.map(slide => <a href="javascript:void(0)" className="text-center">
                    <img style={{display: 'inline'}} src={getImgUrlById(slide.photo)} alt="" />
                </a>)}
            </Slider>}
        </div>
    );
};

export default MiniSlider;