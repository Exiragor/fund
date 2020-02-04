import Aside from '../../components/Navigation/Aside';
import {menu} from './menu';
import { useEffect, useState } from 'react';
import {getOne} from '../../api/content';

const aboutPartnersPage = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        getOne('about-partners').then(res => {
            setContent(res.data);
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">{ content.name }</h1>
            <div className="entry-content with-sidebar" dangerouslySetInnerHTML={{ __html: content.value }} />
            <Aside sections={menu} currentPage={content.name} />
        </div>
    )
};

export default aboutPartnersPage;