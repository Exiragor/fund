import Aside from '../../components/Navigation/Aside';
import MiniSliderPortal from '../../components/Sliders/MiniSliderPortal';
import {menu} from './menu';
import { useEffect, useState } from 'react';
import {getOne} from '../../api/content';

const aboutFondPage = () => {
    const [content, setContent] = useState('');
    const [miniSliders, setMiniSliders] = useState([]);



    useEffect(() => {
        getOne('about-fund').then(res => {
            setContent(res.data);
            setMiniSliders([...document.getElementsByClassName('js-mini-slider')]);
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">О фонде</h1>
            <div className="entry-content with-sidebar" dangerouslySetInnerHTML={{ __html: content.value }} />
            <Aside sections={menu} currentPage="О фонде" />
            <MiniSliderPortal sliders={miniSliders} />
        </div>
    )
};

export default aboutFondPage;