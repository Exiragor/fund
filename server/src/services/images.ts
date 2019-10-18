import {getRepository, Repository} from 'typeorm';
import { Image } from '../models/Image';
import * as fs from 'fs';
import * as path from 'path';
import { randomBytes } from 'crypto';

const getRep: () => Repository<Image> = () => getRepository(Image);

export const saveImg = async (fileName: string, name: string, format: string) => {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    let key = randomBytes(10).toString();
    fs.rename(fileName, path.join(__dirname, `/images/${year}/${month}/${key}/${key}.${format}`), err => {
        return !err    
    })
}