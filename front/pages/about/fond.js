import Aside from '../../components/Navigation/Aside';
import MiniSliderPortal from '../../components/Sliders/MiniSliderPortal';
import {menu} from './menu';
import { useEffect, useState } from 'react';
import {getOne} from '../../api/content';
import {useBus} from 'react-bus';

const aboutFondPage = () => {
    const [content, setContent] = useState('');
    const bus = useBus();

    useEffect(() => {
        getOne('about-fund').then(res => {
            setContent(res.data);
            bus.emit('mini-sliders:refresh');
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">{ content.name }</h1>
            <div className="entry-content with-sidebar" dangerouslySetInnerHTML={{ __html: content.value }} />
            <Aside sections={menu} currentPage="О фонде" />
        </div>
    )
};

export default aboutFondPage;