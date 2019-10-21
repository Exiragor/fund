import {getRepository, Repository} from 'typeorm';
import { Image } from '../models/Image';

const getRep: () => Repository<Image> = () => getRepository(Image);

export const saveImg = async (fileName: string, name: string, destination: string) => {
    let image = new Image(null, name, destination, true);
    await getRep().save(image);

    return image.id;
}