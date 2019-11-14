import {getRepository, Repository} from 'typeorm';
import { Content } from '../models/Content';

const getRep: () => Repository<Content> = () => getRepository(Content);

export const getAll = async (page: number, count: number = 20): Promise<{items: Content[], total: number}> => {
    return {
        items: await getRep().find({
            take: count,
            skip: page > 0 && --page * count || 0,
            where: { isActive: true },
            order: { id: "DESC" }
        }),
        total: await getRep().count()
    }
};

export const add = async (params: Content): Promise<number|null> => {
    const item = {...params};
    item.isActive = true;
    await getRep().save(item);

    return item.id;
};

export const getOne = async (alias: string): Promise<Content> => {
    return await getRep().findOneOrFail({ where: { alias } });
};

export const update = async (id: number, content: Content) => {
    return await getRep().update(id, {...content});
};

export const del = async (id: number) => {
    return await getRep().delete(id);
};