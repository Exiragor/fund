import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class File {

    constructor(id: number | null, filePath: string, fileType: string, isActive: boolean) {
        this.id = id;
        this.filePath = filePath;
        this.fileType = fileType;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number|null;

    @Column()
    filePath: string;

    @Column()
    fileType: string;

    @Column()
    isActive: boolean;
}