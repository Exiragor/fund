import Services from '../components/Main/Services';
import HelpInfo from '../components/Main/HelpInfo';
import MainSlider from '../components/Sliders/MainSlider';
import PartnersSlider from '../components/Sliders/PartnersSlider';
import {getAll} from '../api/slides';
import {getOne} from '../api/content';
import {useEffect, useState} from "react";

const Home = () => {
    const [mainSlides, setMainSlides] = useState([]);
    const [partnersSlides, setPartnersSlides] = useState([]);
    const [helpSlides, setHelpSlides] = useState([]);
    const [activitiesBlock, setActivitiesBlock] = useState(null);
    const [programsBlock, setProgramsBlock] = useState(null);
    const [servicesBlock, setServicesBlock] = useState(null);

    useEffect(() => {
        getAll('main').then(res => {
            setMainSlides(res.data.items);
        });
        getAll('partners').then(res => {
            setPartnersSlides(res.data.items);
        });
        getAll('help').then(res => {
            setHelpSlides(res.data.items);
        });
        getOne('main-activities-block').then(res => {
            setActivitiesBlock(res.data);
        });
        getOne('main-programs-block').then(res => {
            setProgramsBlock(res.data);
        });
        getOne('main-services-block').then(res => {
            setServicesBlock(res.data);
        });
    }, []);

    return (
        <div>
            {mainSlides.length && <MainSlider slides={mainSlides} />}
            <div className="float-clear" />
            <Services activities={activitiesBlock} programs={programsBlock} services={servicesBlock} />
            <HelpInfo articles={helpSlides} />
            <PartnersSlider slides={partnersSlides} />
        </div>
    );
};

export default Home;
