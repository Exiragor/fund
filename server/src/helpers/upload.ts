import multer from 'multer';
import * as path from "path";
import * as fs from 'fs';
import md5 from 'md5';

let storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, 'source.' + file.mimetype.split('/').pop());
    },
    destination: function (req, file, cb) {
        const date: Date = new Date();
        const year: string = date.getFullYear().toString();
        const month: string = date.getMonth().toString();
        const hash = md5(file.originalname + Date.now());
        const filePath: string = path.join(
            process.cwd(),
            `uploads/images/${year}/${month}/${hash}/`
        );
        if (!fs.existsSync(filePath)){
            fs.mkdirSync(filePath, { recursive: true });
        }
        cb(null, filePath);
    }
});

export const upload = multer({ storage: storage });