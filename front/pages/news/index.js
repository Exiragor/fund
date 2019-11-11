import NewsList from '../../components/News/List';
import Aside from '../../components/Navigation/Aside';
import Pagination from '../../components/Navigation/Pagination';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {getNews} from '../../../adminfront/api/news';

export default () => {
    const count = 10;
    const [news, setNews] = useState(null);
    const [pages, setPages] = useState(1);
    const router = useRouter();
    const { page } = router.query;

    useEffect(() => {
        getNews({ page, count }).then(res => {
            setNews(res.data.items);
            setPages(res.data.total);
        });
    }, []);

    const changePageHandler = (num) => {
        console.log(num);
    };

    return (
        <div className="wrapper">
            <h1 className="entry-title">Новости</h1>
            <div className="entry-content with-sidebar">
                <NewsList news={news} />
                <Pagination current-page="1" total={pages} count={count} change-page={changePageHandler} />
            </div>
            <Aside sections={[{ name: 'Шаг за шагом', url: '/news'}]} currentPage="Шаг за шагом" />
        </div>
    );
}