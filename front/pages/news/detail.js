import Detail from '../../components/Catalog/Detail';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {getOneNews} from '../../api/news';
import {useBus} from "react-bus";

const NewsDetail = () => {
    const bus = useBus();
    const router = useRouter();
    const [news, setNews] = useState(null);
    const { id } = router.query;

    useEffect(() => {
        getOneNews(id).then(res => {
            setNews(res.data);
            bus.emit('mini-sliders:refresh');
            bus.emit('audios:refresh');
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">{news && news.title}</h1>
            { news && <Detail item={news} /> }
        </div>
    );
}

export default NewsDetail;
