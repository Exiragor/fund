import {getRepository, Repository} from 'typeorm';
import { Slide } from '../models/Slide';

const getRep: () => Repository<Slide> = () => getRepository(Slide);

export const getSlider = async (sliderName: string) => {
    return await getRep().find({ where: { isActive: true, sliderName }, order: { order: 'ASC', id: 'DESC' }});
};

export const addSlide = async (params: Slide): Promise<number|null> => {
    const slide = {...params};
    slide.isActive = true;
    await getRep().save(slide);

    return slide.id;
};

export const getOne = async (id: number): Promise<Slide> => {
    return await getRep().findOneOrFail(id);
};

export const update = async (id: number, slide: Slide) => {
    return await getRep().update(id, {...slide});
};

export const del = async (id: number) => {
    return await getRep().delete(id);
};