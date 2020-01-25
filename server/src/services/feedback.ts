import {getRepository, Repository} from 'typeorm';
import {Feedback} from "../models/Feedback";

const getRep: () => Repository<Feedback> = () => getRepository(Feedback);

export const getAll = async (page: number, count: number = 20): Promise<{items: Feedback[], total: number}> => {
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

export const add = async (params: Feedback): Promise<number|null> => {
    const item = {...params};
    await getRep().save(item);

    return item.id;
};

export const getOne = async (id: number): Promise<Feedback> => {
    return await getRep().findOneOrFail(id);
};

export const update = async (id: number, content: Feedback) => {
    return await getRep().update(id, {...content});
};

export const del = async (id: number) => {
    return await getRep().delete(id);
};