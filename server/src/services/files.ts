import {getRepository, Repository} from 'typeorm';
import { File } from '../models/File';
import sharp from 'sharp';
import * as fs from 'fs';
import {News} from "../models/News";

const getRep: () => Repository<File> = () => getRepository(File);

export const saveFile = async (fileName: string, destination: string, fileType: string): Promise<File|null> => {
    const file = new File(null, destination, fileType, fileName, '', true);
    await getRep().save(file);

    return file;
};

export const getFile = async (id: number): Promise<{path: string, file: File}> => {
    const file = await getRep().findOneOrFail(id);
    if (!file) {
        return file;
    }
    return { path:`${file.filePath}/source.${file.fileType}`, file };
};

export const getFiles = async (
    prefix: string, page: number, count: number = 20
): Promise<{items: File[], total: number}> => {
    return {
        items: await getRep().find({
            take: count,
            skip: page > 0 && --page * count || 0,
            where: { isActive: true, prefix },
            order: { id: "DESC" }
        }),
        total: await getRep().count({where: { isActive: true, prefix }})
    }
};

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
};