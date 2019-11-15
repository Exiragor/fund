import {getRepository, Repository} from 'typeorm';
import { Projects } from '../models/Projects';

const getRep: () => Repository<Projects> = () => getRepository(Projects);

export const getAll = async (category: string) => {
    return await getRep().find({ where: { isActive: true, category }, order: { order: 'ASC', id: 'DESC' }});
};

export const add = async (params: Projects): Promise<number|null> => {
    const item = {...params};
    item.isActive = true;
    await getRep().save(item);

    return item.id;
};

export const getOne = async (id: number): Promise<Projects> => {
    return await getRep().findOneOrFail(id);
};

export const update = async (id: number, item: Projects) => {
    return await getRep().update(id, {...item});
};

export const del = async (id: number) => {
    return await getRep().delete(id);
};