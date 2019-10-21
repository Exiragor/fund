import multer from 'multer';
import * as path from "path";
import * as fs from 'fs';
import * as crypto from "crypto";

let storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, 'source.' + file.mimetype.split('/').pop());
    },
    destination: function (req, file, cb) {
        let date: Date = new Date();
        let year: string = date.getFullYear().toString();
        let month: string = date.getMonth().toString();
        let hash = crypto.createHash('md5').update(file.originalname + Date.now()).digest('hex');
        let filePath: string = path.join(
            process.cwd(),
            `uploads/images/${year}/${month}/${hash}/`
        );
        if (!fs.existsSync(filePath)){
            fs.mkdirSync(filePath, { recursive: true });
        }
        cb(null, filePath);
    }
})

export const upload = multer({ storage: storage });