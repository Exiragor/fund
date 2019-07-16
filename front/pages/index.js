import Services from '../components/Main/Services';
import HelpInfo from '../components/Main/HelpInfo';
import MainSlider from '../components/Sliders/MainSlider';
import PartnersSlider from '../components/Sliders/PartnersSlider';

const Home = () => {
    return (
        <div>
            <MainSlider />
            <Services />
            <HelpInfo />
            <PartnersSlider />
        </div>
    );
}

export default Home;