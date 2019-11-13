import Services from '../components/Main/Services';
import HelpInfo from '../components/Main/HelpInfo';
import MainSlider from '../components/Sliders/MainSlider';
import PartnersSlider from '../components/Sliders/PartnersSlider';
import {getAll} from '../../adminfront/api/slides';
import {useEffect, useState} from "react";

const Home = () => {
    const [mainSlides, setMainSlides] = useState([]);

    useEffect(() => {
        getAll('main').then(res => {
            setMainSlides(res.data);
        });
    }, []);

    return (
        <div>
            {mainSlides.length && <MainSlider slides={mainSlides} />}
            <div className="float-clear" />
            <Services />
            <HelpInfo />
            <PartnersSlider />
        </div>
    );
}

export default Home;