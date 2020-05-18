import Aside from '../../components/Navigation/Aside';
import List from '../../components/Articles/List';
import {getAll} from '../../api/slides';
import {aboutMenu} from '../../resources/menu';
import {useEffect, useState} from "react";

const HelpPage = () => {
    const [helpSlides, setHelpSlides] = useState([]);

    useEffect(() => {
        getAll('help').then(res => {
            setHelpSlides(res.data.items);
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">Как помочь</h1>
            <div className="entry-content with-sidebar">
                <List articles={helpSlides} width="45%" />
            </div>
            <Aside sections={aboutMenu} currentPage="Как помочь" />
        </div>
    );
};

export default HelpPage;
