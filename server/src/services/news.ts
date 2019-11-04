import {getRepository, Repository} from 'typeorm';
import { News } from '../models/News';

const getRep: () => Repository<News> = () => getRepository(News);

export const getAll = async (page: number, count: number = 20): Promise<News[]> => 
    getRep().find({ take: count, skip: page > 0 && --page * count || 0, where: { isActive: true } });

export const addNews = async (title: string, desc: string, text: string, photo: string): Promise<number|null> => {
    const news = new News(null, title, desc, text, photo, true);
    await getRep().save(news);

    return news.id;
}
