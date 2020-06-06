import Services from '../components/Main/Services';
import HelpInfo from '../components/Main/HelpInfo';
import MainSlider from '../components/Sliders/MainSlider';
import PartnersSlider from '../components/Sliders/PartnersSlider';
import {getAll} from '../api/slides';
import {getOne} from '../api/content';
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import {Modal} from "antd";
import {HeartFilled} from '@ant-design/icons';

const Home = () => {
    const [mainSlides, setMainSlides] = useState([]);
    const [partnersSlides, setPartnersSlides] = useState([]);
    const [helpSlides, setHelpSlides] = useState([]);
    const [activitiesBlock, setActivitiesBlock] = useState(null);
    const [programsBlock, setProgramsBlock] = useState(null);
    const [servicesBlock, setServicesBlock] = useState(null);
    const [showSupportModal, setShowSupportModal] = useState(false);

    const handleCancel = e => {
        setShowSupportModal(false);
    };

    const router = useRouter();
    const {status, checksum} = router.query;

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

        if (status && status == 'success') {
            setShowSupportModal(true);
        }
    }, []);

    return (
        <div>
            {mainSlides.length && <MainSlider slides={mainSlides} />}
            <div className="float-clear" />
            <Services activities={activitiesBlock} programs={programsBlock} services={servicesBlock} />
            <HelpInfo articles={helpSlides} />
            <PartnersSlider slides={partnersSlides} />
            <Modal
                title=""
                visible={showSupportModal}
                onCancel={handleCancel}
                footer={null}
            >
                <h1 className="color-blue">Благодарим за пожертвование! <span className="color-red"><HeartFilled /></span></h1>
            </Modal>
        </div>
    );
};

export default Home;
