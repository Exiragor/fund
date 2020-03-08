import {getRepository, Repository} from 'typeorm';
import {Email} from "../models/Email";

const getRep: () => Repository<Email> = () => getRepository(Email);

export const getAll = async (page: number, count: number = 20): Promise<{items: Email[], total: number}> => {
    return {
        items: await getRep().find({
            take: count,
            skip: page > 0 && --page * count || 0,
            where: { isActive: true },
            order: { id: "DESC" }
        }),
        total: await getRep().count({where: { isActive: true }})
    }
};

export const add = async (params: Email): Promise<number|null> => {
    const item = {...params};
    await getRep().save(item);

    return item.id;
};

export const getOne = async (id: number): Promise<Email> => {
    return await getRep().findOneOrFail(id);
};

export const update = async (id: number, content: Email) => {
    return await getRep().update(id, {...content});
};

export const del = async (id: number) => {
    return await getRep().delete(id);
};
