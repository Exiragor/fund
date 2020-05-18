import Aside from '../../components/Navigation/Aside';
import {maestroMenu} from '../../resources/menu';
import { useEffect, useState } from 'react';
import {getOne} from '../../api/content';
import {useBus} from 'react-bus';

const maestroKidPage = () => {
    const [content, setContent] = useState('');
    const bus = useBus();

    useEffect(() => {
        getOne('maestro-kid').then(res => {
            setContent(res.data);
            bus.emit('mini-sliders:refresh');
            bus.emit('audios:refresh');
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">{ content.name }</h1>
            <div className="entry-content with-sidebar" dangerouslySetInnerHTML={{ __html: content.value }} />
            <Aside sections={maestroMenu} currentPage={content.name} />
        </div>
    )
};

export default maestroKidPage;
