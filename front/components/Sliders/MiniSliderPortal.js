import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

const MiniSliderPortal = ({ slider }) => {
    return ReactDOM.createPortal(
        <Child number={slider.dataset.number}/>,
        slider
    );
};

const Child = ({number}) => <div>привет, это мини-слайдер: {number}</div>;

export default ({sliders}) => {
    return (
        <div>
            {sliders.map((slider, index) => <MiniSliderPortal key={index} slider={slider} />)}
        </div>
    );
}