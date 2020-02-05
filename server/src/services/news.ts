import {getRepository, Repository} from 'typeorm';
import { News } from '../models/News';

const getRep: () => Repository<News> = () => getRepository(News);

export const getAll = async (page: number, count: number = 20): Promise<{items: News[], total: number}> => {
    return {
        items: await getRep().find({
            take: count,
            skip: page > 0 && --page * count || 0,
            where: { isActive: true },
            order: { date: "DESC" }
        }),
        total: await getRep().count({where: { isActive: true }})
    }
};

export const addNews = async (
    title: string,
    date: Date,
    desc: string,
    text: string,
    photo: string,
): Promise<number|null> => {
    const news = new News(null, title, date, desc, text, photo, true);
    await getRep().save(news);

    return news.id;
};

export const getOne = async (id: number): Promise<News> => {
    return await getRep().findOneOrFail(id);
};

export const updateNews = async (id: number, news: News) => {
    return await getRep().update(id, {...news});
};

export const deleteNews = async (id: number) => {
    return await getRep().delete(id);
};
