import {getRepository, Repository} from 'typeorm';
import { News } from '../models/News';

const getRep: () => Repository<News> = () => getRepository(News);

export const getAll = async (page: number, count: number = 20) => {
    return {
        items: await getRep().find({
            take: count,
            skip: page > 0 && --page * count || 0,
            where: { isActive: true },
            order: { id: "DESC" }
        }),
        total: Math.ceil(await getRep().count() / count)
    }
};

export const addNews = async (
    title: string,
    date: string,
    desc: string,
    text: string,
    photo: string
): Promise<number|null> => {
    const news = new News(null, title, date, desc, text, photo, true);
    await getRep().save(news);

    return news.id;
};
