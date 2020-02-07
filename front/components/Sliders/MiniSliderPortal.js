import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import MiniSlider from "./MiniSlider";

const MiniSliderPortal = ({ slider }) => {
    return ReactDOM.createPortal(
        <MiniSlider prefix={slider.dataset.prefix}/>,
        slider
    );
};

export default ({sliders}) => {
    return (
        <div>
            {sliders.map((slider, index) => <MiniSliderPortal key={index} slider={slider} />)}
        </div>
    );
}