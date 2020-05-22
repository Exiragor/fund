import NewsList from '../../components/News/List';
import Aside from '../../components/Navigation/Aside';
import Pagination from '../../components/Navigation/Pagination';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {getNews} from '../../api/news';

export default () => {
    const count = 10;
    const [news, setNews] = useState(null);
    const [pages, setPages] = useState(1);
    const router = useRouter();
    let { page } = router.query;
    page = page || 1;

    useEffect(() => {
        getNews({ page, count }).then(res => {
            setNews(res.data.items);
            setPages(res.data.total);
        });
    }, [router]);

    const changePageHandler = (num) => {
        router.push(`/news?page=${num}`);
    };

    return (
        <div className="wrapper">
            <h1 className="entry-title">Новости</h1>
            <div className="entry-content with-sidebar">
                <NewsList news={news} />
                <Pagination currentPage={+page} total={+pages} count={count} changePage={changePageHandler} />
            </div>
            <Aside sections={[{ name: 'Шаг за шагом', link: '/news'}]} currentPage="Шаг за шагом" />
        </div>
    );
}
