import { useEffect, useState } from 'react';
import {getOne} from '../../api/content';

const aboutPartnersPage = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        getOne('maestro').then(res => {
            setContent(res.data);
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">{ content.name }</h1>
            <div className="entry-content" dangerouslySetInnerHTML={{ __html: content.value }} />
        </div>
    )
};

export default aboutPartnersPage;