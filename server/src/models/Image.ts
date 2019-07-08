import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Image {

    constructor(id: number, name: string, desc: string, filename: string, filePath: string, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.filename = filename;
        this.filePath = filePath;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    filename: string;

    @Column()
    filePath: string;

    @Column()
    isActive: boolean;
}