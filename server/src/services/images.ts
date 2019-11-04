import {getRepository, Repository} from 'typeorm';
import { Image } from '../models/Image';
import sharp from 'sharp';
import * as fs from 'fs';

const getRep: () => Repository<Image> = () => getRepository(Image);

export const saveImg = async (fileName: string, destination: string, fileType: string): Promise<number|null> => {
    const image = new Image(null, destination, fileType, true);
    await getRep().save(image);

    return image.id;
};

export const getImgFile = async (id: number, params: { width: number, height: number } | undefined): Promise<string> => {
    const image = await getRep().findOneOrFail(id);
    if (!image) {
        return image;
    }
    if (!params) {
        return `${image.filePath}/source.${image.fileType}`;
    }
    const { width, height } = params;
    const filePathWithResize = `${image.filePath}/${width}x${height}.${image.fileType}`;
    if (!fs.existsSync(filePathWithResize)) {
        await sharp(`${image.filePath}/source.${image.fileType}`)
            .resize(width, height)
            .toFile(`${image.filePath}/${width}x${height}.${image.fileType}`);
    }

    return filePathWithResize;
}