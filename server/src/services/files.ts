import {getRepository, Repository} from 'typeorm';
import { File } from '../models/File';
import sharp from 'sharp';
import * as fs from 'fs';

const getRep: () => Repository<File> = () => getRepository(File);

export const saveFile = async (fileName: string, destination: string, fileType: string): Promise<number|null> => {
    const file = new File(null, destination, fileType, true);
    await getRep().save(file);

    return file.id;
};

export const getFile = async (id: number): Promise<string> => {
    const file = await getRep().findOneOrFail(id);
    if (!file) {
        return file;
    }
    return `${file.filePath}/source.${file.fileType}`;
}

export const getImgFile = async (id: number, params: { width: number, height: number } | undefined): Promise<string> => {
    const image = await getRep().findOneOrFail(id);
    if (!image) {
        return image;
    }
    if (!params || !['png', 'jpeg', 'jpg', 'bmp', 'gif'].includes(image.fileType.toLowerCase())) {
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