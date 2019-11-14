import Aside from '../../components/Navigation/Aside';
import {menu} from './menu';
import { useEffect, useState } from 'react';
import {getOne} from '../../../adminfront/api/content';

const aboutFondPage = () => {

    const [content, setContent] = useState('');

    useEffect(() => {
        getOne('about-fund').then(res => {
            setContent(res.data);
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">О фонде</h1>
            <div className="entry-content with-sidebar" dangerouslySetInnerHTML={{ __html: content.value }} />
            <Aside sections={menu} currentPage="О фонде" />
        </div>
    )
};

export default aboutFondPage;