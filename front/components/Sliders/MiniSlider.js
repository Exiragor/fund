import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
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
    const [currSlide, setCurrSlide] = useState(null);
    const [isShowingModal, setShowingModal] = useState(false);
    useEffect(() => {
        getAllByPrefix('mini-slider', prefix).then(res => {
            setSlides(res.data);
        });
    }, []);
    const handleClick = function() {
        setCurrSlide(this.slide);
        setShowingModal(true)
    };
    const handleClose = () => setShowingModal(false);

    return (
        <div className="mini-slider">
            {slides.length && <Slider {...settings}>
                {slides.map(slide => <a href="javascript:void(0)" className="text-center" key={slide.id}>
                    <img style={{display: 'inline'}} src={getImgUrlById(slide.photo)} alt="" onClick={handleClick.bind({slide})} />
                </a>)}
            </Slider>}
            {isShowingModal && currSlide &&
                <ModalContainer onClose={handleClose}>
                    <ModalDialog onClose={handleClose}>
                        <p><img style={{maxWidth: '800px', maxHeight: '800px'}} src={getImgUrlById(currSlide.photo)} alt='' /></p>
                    </ModalDialog>
                </ModalContainer>
            }
        </div>
    );
};

export default MiniSlider;
